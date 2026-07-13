"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { ScaleIn } from "@/components/common/Motion";

import { SERVICES } from "@/constants/services";

import { contactSchema, ContactFormValues } from "./contact.schema";
import { toast } from "sonner";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      phone: "",
      service: SERVICES[0],
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      reset();

      toast.success("Service Request Submitted!", {
        description:
          "We'll contact you shortly. Thank you for choosing MRTECHYCOOL.",
      });
    } catch (error) {
      toast.error("Submission Failed", {
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }
  return (
    <ScaleIn>
      <div
        className="
          rounded-3xl
          border
          border-slate-200

          bg-white

          p-8

          shadow-sm

          transition-all
          duration-300

          hover:shadow-xl
        "
      >
        <h3 className="mb-2 text-3xl font-bold text-slate-900">
          Schedule Service
        </h3>

        <p className="mb-8 text-slate-600">
          Fill out the form and we&apos;ll contact you shortly.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name")}
              className={`
      w-full
      rounded-xl
      border
      px-4
      py-3
      outline-none
      transition-all
      duration-300

      ${
        errors.name
          ? "border-red-500 focus:ring-red-100"
          : "border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
      }
    `}
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone")}
              className={`
      w-full
      rounded-xl
      border
      px-4
      py-3
      outline-none
      transition-all
      duration-300

      ${
        errors.phone
          ? "border-red-500 focus:ring-red-100"
          : "border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
      }
    `}
            />

            {errors.phone && (
              <p className="mt-2 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("service")}
              className={`
      w-full
      rounded-xl
      border
      px-4
      py-3
      outline-none
      transition-all
      duration-300

      ${
        errors.service
          ? "border-red-500 focus:ring-red-100"
          : "border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
      }
    `}
            >
              {SERVICES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            {errors.service && (
              <p className="mt-2 text-sm text-red-600">
                {errors.service.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              rows={5}
              placeholder="Describe your issue..."
              {...register("message")}
              className={`
      w-full
      rounded-xl
      border
      px-4
      py-3
      outline-none
      transition-all
      duration-300

      ${
        errors.message
          ? "border-red-500 focus:ring-red-100"
          : "border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
      }
    `}
            />

            {errors.message && (
              <p className="mt-2 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="
    w-full
    rounded-xl
    transition-all
    duration-300
    hover:-translate-y-1
  "
          >
            {isSubmitting ? "Submitting Request..." : "Schedule Service"}
          </Button>
        </form>
      </div>
    </ScaleIn>
  );
}
