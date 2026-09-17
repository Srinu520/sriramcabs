"use client";

import { FormEvent, useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiAlertCircle, FiCheckCircle, FiSend } from "react-icons/fi";

type FormData = {
  name: string; mobile: string; email: string; tripType: string; pickupLocation: string; dropLocation: string;
  pickupDate: string; pickupTime: string; tripOption: string; vehicle: string; passengers: string; notes: string;
};

const initialData: FormData = { name: "", mobile: "", email: "", tripType: "Airport", pickupLocation: "", dropLocation: "", pickupDate: "", pickupTime: "", tripOption: "One-way", vehicle: "Sedan", passengers: "", notes: "" };

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const whatsappLink = useMemo(() => {
    const data = submittedData ?? form;
    const message = `Hi Sree Khushi Tours & Travels, I want to book a cab.\nName: ${data.name}\nMobile: ${data.mobile}\nTrip: ${data.tripType} (${data.tripOption})\nFrom: ${data.pickupLocation || "TBD"}\nTo: ${data.dropLocation || "TBD"}\nDate: ${data.pickupDate || "TBD"} ${data.pickupTime || ""}\nPassengers: ${data.passengers || "Not sure"}\nVehicle: ${data.vehicle}\nNotes: ${data.notes || "None"}`;
    return `https://wa.me/918919602258?text=${encodeURIComponent(message)}`;
  }, [form, submittedData]);

  function handleChange<T extends keyof FormData>(field: T, value: FormData[T]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate(data: FormData) {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) newErrors.name = "Name is required.";
    if (!data.mobile.trim()) newErrors.mobile = "Mobile number is required.";
    if (!data.tripType.trim()) newErrors.tripType = "Select a trip type.";
    if (!data.pickupLocation.trim()) newErrors.pickupLocation = "Pick-up location is required.";
    if (!data.pickupDate.trim()) newErrors.pickupDate = "Pick-up date is required.";
    if (!data.pickupTime.trim()) newErrors.pickupTime = "Pick-up time is required.";
    return newErrors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault(); setServerError(""); setSuccess(false);
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    try {
      setSubmitting(true);
      const res = await fetch("/api/book", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok || !data?.success) { setServerError("Something went wrong. Please try again or call us directly."); return; }
      setSuccess(true); setSubmittedData(form); setForm(initialData);
    } catch { setServerError("Unable to submit now. Please try WhatsApp or call."); }
    finally { setSubmitting(false); }
  }

  return (
    <div className="glass rounded-2xl p-6 shadow-soft">
      <div className="mb-4 space-y-1"><h3 className="text-lg font-semibold text-brand-dark">Book Your Cab</h3><p className="text-sm text-brand-dark/70">Quick response on call or WhatsApp. We are available 24/7.</p></div>
      {success && <div className="mb-4 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 shadow-soft"><FiCheckCircle className="mt-0.5 text-lg text-emerald-600" /><div><p className="font-semibold">Request sent!</p><p>We will confirm shortly. You can also confirm on WhatsApp.</p></div></div>}
      {serverError && <div className="mb-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900 shadow-soft"><FiAlertCircle className="mt-0.5 text-lg text-red-600" /><p>{serverError}</p></div>}
      <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <Field label="Name *"><input type="text" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={inputClass} placeholder="Your full name" />{errors.name && errorText(errors.name)}</Field>
        <Field label="Mobile Number *"><input type="tel" value={form.mobile} onChange={(e) => handleChange("mobile", e.target.value)} className={inputClass} placeholder="+91 7411606748" />{errors.mobile && errorText(errors.mobile)}</Field>
        <Field label="Email"><input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className={inputClass} placeholder="you@example.com" /></Field>
        <Field label="Trip Type *"><select value={form.tripType} onChange={(e) => handleChange("tripType", e.target.value)} className={inputClass}><option>Airport</option><option>Local</option><option>Outstation</option><option>Corporate</option></select>{errors.tripType && errorText(errors.tripType)}</Field>
        <Field label="Pick-up Location *" wide><input type="text" value={form.pickupLocation} onChange={(e) => handleChange("pickupLocation", e.target.value)} className={inputClass} placeholder="Your address or landmark" />{errors.pickupLocation && errorText(errors.pickupLocation)}</Field>
        <Field label="Drop Location" wide><input type="text" value={form.dropLocation} onChange={(e) => handleChange("dropLocation", e.target.value)} className={inputClass} placeholder="Destination or route" /></Field>
        <Field label="Pick-up Date *"><input type="date" value={form.pickupDate} onChange={(e) => handleChange("pickupDate", e.target.value)} className={inputClass} />{errors.pickupDate && errorText(errors.pickupDate)}</Field>
        <Field label="Pick-up Time *"><input type="time" value={form.pickupTime} onChange={(e) => handleChange("pickupTime", e.target.value)} className={inputClass} />{errors.pickupTime && errorText(errors.pickupTime)}</Field>
        <Field label="Trip"><select value={form.tripOption} onChange={(e) => handleChange("tripOption", e.target.value)} className={inputClass}><option>One-way</option><option>Round trip</option></select></Field>
        <Field label="Vehicle Preference"><select value={form.vehicle} onChange={(e) => handleChange("vehicle", e.target.value)} className={inputClass}><option>Sedan</option><option>Dzire</option><option>Ertiga</option><option>Innova</option><option>Tempo Traveller</option><option>Urbania</option><option>Not sure</option></select></Field>
        <Field label="Number of Passengers"><input type="number" min="1" value={form.passengers} onChange={(e) => handleChange("passengers", e.target.value)} className={inputClass} placeholder="e.g. 4" /></Field>
        <Field label="Special Notes" wide><textarea value={form.notes} onChange={(e) => handleChange("notes", e.target.value)} rows={3} className={inputClass} placeholder="Luggage details, elderly, kids, timings, etc." /></Field>
        <div className="flex flex-wrap items-center gap-3 md:col-span-2"><button type="submit" disabled={submitting} className="btn-primary disabled:opacity-70"><FiSend />{submitting ? "Booking..." : "Send Booking Request"}</button>{success && <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary"><FaWhatsapp />Confirm on WhatsApp</a>}<p className="text-xs text-brand-dark/60">Call: +91 7411606748 • WhatsApp: +91 8919602258</p></div>
      </form>
    </div>
  );
}

const inputClass = "w-full rounded-xl border border-brand-gold/50 bg-white/80 px-4 py-3 text-sm text-brand-dark shadow-inner transition focus:border-brand-green focus:outline-none";
function Field({ label, children, wide = false }: { label: string; children: React.ReactNode; wide?: boolean }) { return <div className={`space-y-1 ${wide ? "md:col-span-2" : ""}`}><label className="text-sm font-medium text-brand-dark">{label}</label>{children}</div>; }
function errorText(message: string) { return <p className="flex items-center gap-1 text-xs text-red-600"><FiAlertCircle />{message}</p>; }
