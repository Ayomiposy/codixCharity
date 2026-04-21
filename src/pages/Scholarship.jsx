import { useState } from "react";
import { Upload, Check } from "lucide-react";
import SectionTag from "@/components/SectionTag";

const STEPS = [
  { id: 1, label: "Personal" },
  { id: 2, label: "Academic" },
  { id: 3, label: "Financial" },
  { id: 4, label: "Leadership" },
  { id: 5, label: "Declaration" },
];

const initialForm = {
  // Step 1
  firstName: "", lastName: "", middleName: "", phone: "", gender: "", dob: "",
  homeAddress: "", localGov: "", stateOrigin: "", country: "",
  // Step 2
  institution: "", courseStudy: "", yearLevel: "", matric: "", cgpa: "",
  fileName: "",
  // Step 3
  financialNeed: "", appliedOther: "", personalStatement: "",
  // Step 4
  leadership: "", communityImpact: "",
  refFullName: "", refRelationship: "", refOrganization: "", refEmail: "", refPhone: "",
  // Step 5
  trueInfo: false, understand: false, mediaConsent: "", confirmName: "", date: "",
};

const Scholarship = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [k]: v });
  };

  const next = () => setStep((s) => Math.min(5, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.trueInfo || !form.confirmName.trim()) return;
    setSubmitted(true);
  };

  const inputCls = "w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";
  const labelCls = "block text-sm font-medium mb-1.5";

  return (
    <div>
      <section className="container py-16 md:py-20 text-center">
        <SectionTag variant="dark">Application Form</SectionTag>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4">CCF Scholarship</h1>
      </section>

      <section className="bg-secondary/40 py-12 md:py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Scholarship Application Form</h2>
            <p className="text-muted-foreground text-sm mt-2">Complete all sections accurately to be considered for our scholarship programme.</p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Step {step} of 5</span>
              <span>{Math.round((step / 5) * 100)}% Complete</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
              <div className="h-full bg-primary transition-all" style={{ width: `${(step / 5) * 100}%` }} />
            </div>
            <div className="flex justify-between mt-6">
              {STEPS.map((s) => (
                <div key={s.id} className="flex flex-col items-center gap-2 flex-1">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                    step > s.id ? "bg-primary text-primary-foreground" :
                    step === s.id ? "bg-primary text-primary-foreground ring-4 ring-primary/20" :
                    "bg-border text-muted-foreground"
                  }`}>
                    {step > s.id ? <Check size={14} /> : s.id}
                  </div>
                  <span className={`text-xs ${step === s.id ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {submitted ? (
            <div className="bg-background rounded-lg p-12 text-center border border-border">
              <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Check size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">Application Submitted!</h3>
              <p className="text-muted-foreground">Thank you, {form.firstName}. We'll review your application and get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-background rounded-lg p-6 md:p-10 border border-border shadow-sm">
              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-heading font-bold mb-4">Personal Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className={labelCls}>First Name*</label><input required className={inputCls} placeholder="Enter your first name" value={form.firstName} onChange={update("firstName")} /></div>
                    <div><label className={labelCls}>Last Name*</label><input required className={inputCls} placeholder="Enter your last name" value={form.lastName} onChange={update("lastName")} /></div>
                    <div><label className={labelCls}>Middle Name</label><input className={inputCls} placeholder="Enter your middle name" value={form.middleName} onChange={update("middleName")} /></div>
                    <div><label className={labelCls}>Phone Number*</label><input required type="tel" className={inputCls} placeholder="+234 XXX XXXX" value={form.phone} onChange={update("phone")} /></div>
                    <div>
                      <label className={labelCls}>Gender*</label>
                      <select required className={inputCls} value={form.gender} onChange={update("gender")}>
                        <option value="">Select gender</option><option>Female</option><option>Male</option><option>Other</option>
                      </select>
                    </div>
                    <div><label className={labelCls}>Date of Birth*</label><input required type="date" className={inputCls} value={form.dob} onChange={update("dob")} /></div>
                  </div>
                  <div><label className={labelCls}>Home Address*</label><input required className={inputCls} placeholder="Enter your home address" value={form.homeAddress} onChange={update("homeAddress")} /></div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div><label className={labelCls}>Local Government Area (LGA)*</label><input required className={inputCls} value={form.localGov} onChange={update("localGov")} /></div>
                    <div>
                      <label className={labelCls}>State of Origin*</label>
                      <select required className={inputCls} value={form.stateOrigin} onChange={update("stateOrigin")}><option value="">Select State</option><option>Lagos</option><option>Abuja</option><option>Rivers</option></select>
                    </div>
                    <div>
                      <label className={labelCls}>Country*</label>
                      <select required className={inputCls} value={form.country} onChange={update("country")}><option value="">Select Country</option><option>Nigeria</option></select>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-heading font-bold mb-4">Academic Information</h3>
                  <div><label className={labelCls}>Name of Institution*</label><input required className={inputCls} placeholder="University/Polytechnic name" value={form.institution} onChange={update("institution")} /></div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className={labelCls}>Course of Study*</label><input required className={inputCls} placeholder="e.g. Course of Study" value={form.courseStudy} onChange={update("courseStudy")} /></div>
                    <div>
                      <label className={labelCls}>Current Year/Level*</label>
                      <select required className={inputCls} value={form.yearLevel} onChange={update("yearLevel")}><option value="">Select your level</option><option>100</option><option>200</option><option>300</option><option>400</option><option>500</option></select>
                    </div>
                    <div><label className={labelCls}>Matriculation/Student ID*</label><input required className={inputCls} placeholder="Enter your matric number" value={form.matric} onChange={update("matric")} /></div>
                    <div><label className={labelCls}>Current CGPA*</label><input required className={inputCls} placeholder="e.g. 4.50/5.00" value={form.cgpa} onChange={update("cgpa")} /></div>
                  </div>
                  <div>
                    <label className={labelCls}>Upload most recent Academic Transcript*</label>
                    <label className="border-2 border-dashed border-border rounded-md p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary transition-colors">
                      <Upload className="text-muted-foreground mb-2" size={24} />
                      <span className="text-sm text-muted-foreground">{form.fileName || "Click to upload"}</span>
                      <input type="file" className="hidden" onChange={(e) => setForm({ ...form, fileName: e.target.files?.[0]?.name || "" })} />
                    </label>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-heading font-bold mb-4">Financial Need</h3>
                  <div>
                    <label className={labelCls}>Why do you feel that you would benefit from this scholarship?*</label>
                    <textarea required rows={5} className={inputCls} placeholder="Type here..." value={form.financialNeed} onChange={update("financialNeed")} />
                  </div>
                  <div>
                    <label className={labelCls}>Are you currently receiving any other forms of financial assistance?*</label>
                    <div className="flex gap-6 text-sm">
                      <label className="flex items-center gap-2"><input type="radio" name="other" value="Yes" onChange={update("appliedOther")} /> Yes</label>
                      <label className="flex items-center gap-2"><input type="radio" name="other" value="No" onChange={update("appliedOther")} /> No</label>
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Personal Statement*</label>
                    <p className="text-xs text-muted-foreground mb-2">Tell us about yourself, your goals, and how this scholarship will help you achieve them (max 500 words).</p>
                    <textarea required rows={6} className={inputCls} placeholder="Type here..." value={form.personalStatement} onChange={update("personalStatement")} />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-heading font-bold mb-4">Leadership & Community Involvement</h3>
                  <div>
                    <label className={labelCls}>List any leadership roles you've held or community service you've participated in.*</label>
                    <textarea required rows={4} className={inputCls} value={form.leadership} onChange={update("leadership")} />
                  </div>
                  <div>
                    <label className={labelCls}>How do you plan to contribute to your community after completing your studies?*</label>
                    <textarea required rows={4} className={inputCls} value={form.communityImpact} onChange={update("communityImpact")} />
                  </div>
                  <h4 className="text-base font-heading font-bold pt-4">Referee Information</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className={labelCls}>Full Name*</label><input required className={inputCls} value={form.refFullName} onChange={update("refFullName")} /></div>
                    <div><label className={labelCls}>Relationship*</label><select required className={inputCls} value={form.refRelationship} onChange={update("refRelationship")}><option value="">Select relationship</option><option>Lecturer</option><option>Mentor</option><option>Employer</option></select></div>
                    <div><label className={labelCls}>Organisation*</label><input required className={inputCls} value={form.refOrganization} onChange={update("refOrganization")} /></div>
                    <div><label className={labelCls}>Phone Number*</label><input required type="tel" className={inputCls} value={form.refPhone} onChange={update("refPhone")} /></div>
                    <div className="sm:col-span-2"><label className={labelCls}>Email Address*</label><input required type="email" className={inputCls} value={form.refEmail} onChange={update("refEmail")} /></div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-heading font-bold mb-4">Declaration</h3>
                  <label className="flex gap-3 items-start text-sm">
                    <input type="checkbox" required className="mt-1" checked={form.trueInfo} onChange={update("trueInfo")} />
                    <span>I confirm that all information provided in this application is true and accurate to the best of my knowledge.</span>
                  </label>
                  <label className="flex gap-3 items-start text-sm">
                    <input type="checkbox" required className="mt-1" checked={form.understand} onChange={update("understand")} />
                    <span>I understand that any false information may result in disqualification.</span>
                  </label>

                  <div className="pt-4">
                    <h4 className="font-heading font-bold mb-2">Media Consent</h4>
                    <p className="text-xs text-muted-foreground mb-3">The Codix Charity Foundation may use documents and stories (e.g. photographs, videos, and written submissions) from the funded programs to share the program's success with the public, on social media, in print, or in fundraising activities.</p>
                    <p className="text-sm mb-2">Do you consent to the use of your name, photograph, story description, and information about your Codix Charity Foundation involvement in such promotional materials?</p>
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center gap-2"><input type="radio" name="media" value="Yes" onChange={update("mediaConsent")} /> Yes, I give my consent</label>
                      <label className="flex items-center gap-2"><input type="radio" name="media" value="No" onChange={update("mediaConsent")} /> No, I do not give my consent</label>
                    </div>
                  </div>

                  <div className="pt-4 space-y-4">
                    <h4 className="font-heading font-bold">Submission</h4>
                    <div><label className={labelCls}>Signature (Full Name)*</label><input required className={inputCls} value={form.confirmName} onChange={update("confirmName")} /></div>
                    <div><label className={labelCls}>Date*</label><input required type="date" className={inputCls} value={form.date} onChange={update("date")} /></div>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-8 mt-6 border-t border-border">
                <button type="button" onClick={prev} disabled={step === 1} className="rounded-md border border-border px-6 py-2.5 text-sm font-medium disabled:opacity-40">
                  Previous
                </button>
                {step < 5 ? (
                  <button type="button" onClick={next} className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                    Next
                  </button>
                ) : (
                  <button type="submit" className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Scholarship;
