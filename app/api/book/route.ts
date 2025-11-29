import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const required = ["name", "mobile", "tripType", "pickupLocation", "pickupDate", "pickupTime"];
    const missing = required.filter((field) => !data?.[field]);

    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, message: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const emailAccessToken = process.env.GMAIL_ACCESS_TOKEN;
    const emailFrom = process.env.GMAIL_FROM;
    const emailTo = process.env.GMAIL_TO;
    const whatsappAccessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const whatsappPhoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const whatsappTo = process.env.WHATSAPP_TO;

    const summary = [
      "New booking request",
      `Name: ${data.name}`,
      `Mobile: ${data.mobile}`,
      `Trip: ${data.tripType}`,
      `Pickup: ${data.pickupLocation}`,
      `Date: ${data.pickupDate}`,
      `Time: ${data.pickupTime}`,
      data?.dropLocation ? `Drop: ${data.dropLocation}` : null,
      data?.notes ? `Notes: ${data.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const notifications: Promise<unknown>[] = [];

    if (emailAccessToken && emailFrom && emailTo) {
      const rawEmail = [
        `From: ${emailFrom}`,
        `To: ${emailTo}`,
        'Content-Type: text/plain; charset="UTF-8"',
        "MIME-Version: 1.0",
        `Subject: New booking from ${data.name}`,
        "",
        summary,
      ].join("\n");

      notifications.push(
        fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${emailAccessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ raw: Buffer.from(rawEmail).toString("base64url") }),
        }).then((res) => {
          if (!res.ok) {
            throw new Error(`Gmail send failed with status ${res.status}`);
          }
        })
      );
    }

    if (whatsappAccessToken && whatsappPhoneNumberId && whatsappTo) {
      notifications.push(
        fetch(`https://graph.facebook.com/v17.0/${whatsappPhoneNumberId}/messages`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${whatsappAccessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: whatsappTo,
            type: "text",
            text: { body: summary },
          }),
        }).then((res) => {
          if (!res.ok) {
            throw new Error(`WhatsApp send failed with status ${res.status}`);
          }
        })
      );
    }

    if (notifications.length > 0) {
      void Promise.all(notifications).catch((err) => console.error("Notification delivery failed:", err));
    } else {
      console.log("New booking request:", data);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to process booking at the moment." },
      { status: 500 }
    );
  }
}
