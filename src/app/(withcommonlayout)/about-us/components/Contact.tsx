"use client";

import emailjs from "@emailjs/browser";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import SocialPlatform from "@/components/Shared/SocialPlatform/SocialPlatform";
import SectionTitle from "@/components/UI/Shared/SectionTitle";
import { toast } from "sonner";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_mv4heq6",
          "template_3u6p59j",
          form.current,
          "BLs4I68p-JWBiWffD"
        )
        .then(
          () => {
            toast.success("Successfully send mail");
            form?.current?.reset();
          },
          () => {
            toast.success("Successfully send mail");
            form?.current?.reset();
          }
        );
    }
  };

  return (
    <div id="contact" className="pt-10">
      <div className="lg:w-[800px] mx-auto">
        <div className="lg:col-span-2 lg:mt-0 mt-6 lg:py-14 p-6 lg:px-20  rounded-2xl">
          <SectionTitle title="Contact with us" />
          <form ref={form} onSubmit={sendEmail} className="">
            <TextField
              type="text"
              name="user_name"
              placeholder="Enter your name"
              fullWidth
              label="Name"
              sx={{
                mt: 1,
              }}
              size="small"
            />
            <TextField
              type="email"
              name="user_email"
              placeholder="Enter your email"
              fullWidth
              label="Email"
              sx={{
                mt: 1,
              }}
              size="small"
            />
            <TextField
              type="number"
              name="user_phone"
              placeholder="Enter phone number"
              fullWidth
              label="Phone Number"
              sx={{
                mt: 1,
              }}
              size="small"
            />
            <textarea
              name="message"
              placeholder="Message....."
              className="w-full h-20 mb-3 mt-2 rounded-lg border px-4 py-3"
              id=""
            ></textarea>
            <div className="flex items-center">
              <SocialPlatform />
            </div>
            <Button
              type="submit"
              className="h-14 w-32  rounded-full bg-gradient-to-r from-primary to-secondary "
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
