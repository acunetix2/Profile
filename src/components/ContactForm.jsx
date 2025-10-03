import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    setLoading(true);
    setStatus("Sending...");

    // ✅ EmailJS send
    emailjs
      .send(
        "service_fc36n6w", // EmailJS service ID
        "template_7wqzaxa", // EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "oLbjccXfia6m6eNv5" // EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);

          // Auto clear status after 3s
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("❌ Failed to send. Please try again.");
          setLoading(false);

          // Auto clear status after 3s
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <Card
      className="max-w-xl mx-auto p-6 rounded-2xl 
      shadow-[0_0_30px_rgba(139,92,246,0.5)] 
      bg-gradient-to-br from-gray-900 via-gray-800 to-black 
      border border-purple-400/40 
      animate-[floatBounce_6s_ease-in-out_infinite]"
    >
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-gray-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(167,139,250,0.7)]">
          Reach Me Out
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 text-indigo-200 animate-fadeIn"
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="bg-transparent border border-blue-400/50 text-purple-200 placeholder:text-purple-300/50 rounded-xl shadow-[0_0_12px_rgba(167,139,250,0.4)] focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition-all"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="bg-transparent border border-blue-400/50 text-indigo-200 placeholder:text-indigo-300/50 rounded-xl shadow-[0_0_12px_rgba(129,140,248,0.4)] focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all"
          />
          <Textarea
            name="message"
            placeholder="💬 Your Message"
            value={form.message}
            onChange={handleChange}
            className="bg-transparent border border-blue-400/50 text-purple-200 placeholder:text-purple-300/50 rounded-xl shadow-[0_0_12px_rgba(196,181,253,0.4)] focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition-all"
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 shadow-[0_0_20px_rgba(167,139,250,0.6)] hover:shadow-[0_0_30px_rgba(129,140,248,0.8)] transition-all duration-300"
          >
            {loading ? "sending..." : "Send Message"}
          </Button>
        </form>
        {status && (
          <p className="text-center mt-4 text-sm text-purple-300 animate-pulse">
            {status}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;
