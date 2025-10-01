// src/components/ContactForm.jsx
import React, { useState } from "react";
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      // placeholder: you can connect to EmailJS, Nodemailer API, or backend
      console.log("Form submitted:", form);

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <Card className="max-w-xl mx-auto p-6 shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-green-600 text-center">
          Reach me out
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 text-blue-400">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
        {status && (
          <p className="text-center mt-4 text-sm text-muted-foreground">
            {status}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;
