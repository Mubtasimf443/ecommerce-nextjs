/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"

import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { Card } from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";
import { Textarea } from "@/components/ui/shadcn/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/shadcn/radio-group";
import { Switch } from "@/components/ui/shadcn/switch";
import { Calendar } from "@/components/ui/shadcn/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/shadcn/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Bell, CalendarIcon, Mail, MessagesSquare, AlertTriangle } from 'lucide-react';
import { Label } from '@/components/ui/shadcn/label';
import { NotificationFormSchema, initialValues, NotificationFormValues } from './NotificationFormSchema';
import { toast } from 'sooner';

interface Props {}

const CreateNotificationCard: FC<Props> = () => {
  const handleSubmit = async (values: NotificationFormValues, { setSubmitting, resetForm }: any) => {
    try {
      // TODO: Implement your API call here
      console.log('Form Values:', values);
      
      toast.success(
        values.isScheduled 
          ? 'Notification scheduled successfully!' 
          : 'Notification sent successfully!'
      );
      
      resetForm();
    } catch (error) {
      toast.error('Failed to process notification');
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Create Notification</h2>
        <p className="text-sm text-muted-foreground">
          Create and send notifications to your users through multiple channels.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={NotificationFormSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, setFieldValue, isSubmitting }) => (
          <Form className="space-y-6">
            {/* Title */}
            <FormItem>
              <FormLabel>Notification Title</FormLabel>
              <FormControl>
                <Field
                  as={Input}
                  name="title"
                  placeholder="Enter notification title"
                  className={cn(
                    "w-full",
                    errors.title && touched.title && "border-red-500"
                  )}
                />
              </FormControl>
              {errors.title && touched.title && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  {errors.title}
                </div>
              )}
              <FormDescription>
                Keep it short and clear. This will be the first thing users see.
              </FormDescription>
            </FormItem>

            {/* Message */}
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Field
                  as={Textarea}
                  name="message"
                  placeholder="Enter your notification message"
                  className={cn(
                    "min-h-[100px]",
                    errors.message && touched.message && "border-red-500"
                  )}
                />
              </FormControl>
              {errors.message && touched.message && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  {errors.message}
                </div>
              )}
              <FormDescription>
                Provide detailed information about your notification.
              </FormDescription>
            </FormItem>

            {/* Notification Type */}
            <FormItem>
              <FormLabel>Notification Type</FormLabel>
              <Field name="notificationType">
                {({ field }: any) => (
                  <RadioGroup
                    {...field}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2"
                    value={field.value}
                    onValueChange={(value) => setFieldValue("notificationType", value)}
                  >
                    {[
                      { value: 'info', icon: MessagesSquare, label: 'Info' },
                      { value: 'success', icon: Bell, label: 'Success' },
                      { value: 'warning', icon: Bell, label: 'Warning' },
                      { value: 'error', icon: Bell, label: 'Error' }
                    ].map(({ value, icon: Icon, label }) => (
                      <div key={value}>
                        <RadioGroupItem
                          value={value}
                          id={value}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={value}
                          className={cn(
                            "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4",
                            "hover:bg-accent hover:text-accent-foreground",
                            "peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                            errors.notificationType && touched.notificationType && "border-red-500"
                          )}
                        >
                          <Icon className="mb-2 h-6 w-6" />
                          <span className="text-sm font-medium">{label}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              </Field>
              {errors.notificationType && touched.notificationType && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  {errors.notificationType}
                </div>
              )}
            </FormItem>

            {/* Delivery Channels */}
            <FormItem>
              <FormLabel>Delivery Channels</FormLabel>
              <div className="grid gap-4 pt-2">
                {[
                  { id: 'email', icon: Mail, label: 'Email Notification' },
                  { id: 'push', icon: Bell, label: 'Push Notification' },
                  { id: 'account', icon: MessagesSquare, label: 'Account Display Only' }
                ].map(({ id, icon: Icon, label }) => (
                  <div key={id} className="flex items-center justify-between space-x-2 rounded-md border p-4">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <Label htmlFor={id}>{label}</Label>
                    </div>
                    <Field name={`deliveryChannels.${id}`}>
                      {({ field }: any) => (
                        <Switch
                          id={id}
                          checked={field.value}
                          onCheckedChange={(checked) => 
                            setFieldValue(`deliveryChannels.${id}`, checked)
                          }
                        />
                      )}
                    </Field>
                  </div>
                ))}
              </div>
              {errors.deliveryChannels && touched.deliveryChannels && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  {errors.deliveryChannels}
                </div>
              )}
            </FormItem>

            {/* Target Audience */}
            <FormItem>
              <FormLabel>Target Audience</FormLabel>
              <Field name="targetAudience">
                {({ field }: any) => (
                  <Select
                    value={field.value}
                    onValueChange={(value) => setFieldValue("targetAudience", value)}
                  >
                    <SelectTrigger className={cn(
                      errors.targetAudience && touched.targetAudience && "border-red-500"
                    )}>
                      <SelectValue placeholder="Select target audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="specific">Specific Users</SelectItem>
                      <SelectItem value="premium">Premium Members</SelectItem>
                      <SelectItem value="new">New Users</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </Field>
              {errors.targetAudience && touched.targetAudience && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  {errors.targetAudience}
                </div>
              )}
            </FormItem>

            {/* Schedule */}
            <FormItem>
              <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-4 h-4" />
                  <Label htmlFor="isScheduled">Schedule Notification</Label>
                </div>
                <Field name="isScheduled">
                  {({ field }: any) => (
                    <Switch
                      id="isScheduled"
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        setFieldValue("isScheduled", checked);
                        if (!checked) {
                          setFieldValue("scheduledDate", null);
                        }
                      }}
                    />
                  )}
                </Field>
              </div>

              {values.isScheduled && (
                <div className="pt-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !values.scheduledDate && "text-muted-foreground",
                          errors.scheduledDate && touched.scheduledDate && "border-red-500"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {values.scheduledDate ? 
                          format(values.scheduledDate, "PPP") : 
                          "Pick a date"
                        }
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={values.scheduledDate}
                        onSelect={(date) => setFieldValue("scheduledDate", date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.scheduledDate && touched.scheduledDate && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      {errors.scheduledDate}
                    </div>
                  )}
                </div>
              )}
            </FormItem>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-4">
              <Button 
                variant="outline" 
                type="button"
                onClick={() => setFieldValue('status', 'draft')}
                disabled={isSubmitting}
              >
                Save as Draft
              </Button>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "relative",
                  isSubmitting && "cursor-not-allowed opacity-70"
                )}
              >
                {isSubmitting ? (
                  <>
                    <span className="opacity-0">
                      {values.isScheduled ? 'Schedule Notification' : 'Send Notification'}
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle 
                          className="opacity-25" 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="4"
                        />
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                    </span>
                  </>
                ) : (
                  values.isScheduled ? 'Schedule Notification' : 'Send Notification'
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default CreateNotificationCard;