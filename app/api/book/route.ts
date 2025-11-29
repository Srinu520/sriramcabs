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

    // TODO: Integrate email/SMS/WhatsApp notification or CRM hook here.
    // For now, we log to server console.
    console.log("New booking request:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to process booking at the moment." },
      { status: 500 }
    );
  }
}
