/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import React, { FC, useState } from 'react';
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
  Form,
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
import { Bell, CalendarIcon, Mail, MessagesSquare } from 'lucide-react';
import { Label } from '@/components/ui/shadcn/label';

interface Props {}

const CreateNotificationCard: FC<Props> = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isScheduled, setIsScheduled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Card className="w-full max-w-3xl mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Create Notification</h2>
        <p className="text-sm text-muted-foreground">
          Create and send notifications to your users through multiple channels.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <FormItem>
          <FormLabel>Notification Title</FormLabel>
          <FormControl>
            <Input 
              placeholder="Enter notification title"
              className="w-full"
            />
          </FormControl>
          <FormDescription>
            Keep it short and clear. This will be the first thing users see.
          </FormDescription>
        </FormItem>

        {/* Message */}
        <FormItem>
          <FormLabel>Message</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Enter your notification message"
              className="min-h-[100px]"
            />
          </FormControl>
          <FormDescription>
            Provide detailed information about your notification.
          </FormDescription>
        </FormItem>

        {/* Notification Type */}
        <FormItem>
          <FormLabel>Notification Type</FormLabel>
          <RadioGroup defaultValue="info" className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div>
              <RadioGroupItem
                value="info"
                id="info"
                className="peer sr-only"
              />
              <Label
                htmlFor="info"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <MessagesSquare className="mb-2 h-6 w-6" />
                <span className="text-sm font-medium">Info</span>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="success"
                id="success"
                className="peer sr-only"
              />
              <Label
                htmlFor="success"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Bell className="mb-2 h-6 w-6" />
                <span className="text-sm font-medium">Success</span>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="warning"
                id="warning"
                className="peer sr-only"
              />
              <Label
                htmlFor="warning"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Bell className="mb-2 h-6 w-6" />
                <span className="text-sm font-medium">Warning</span>
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value="error"
                id="error"
                className="peer sr-only"
              />
              <Label
                htmlFor="error"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Bell className="mb-2 h-6 w-6" />
                <span className="text-sm font-medium">Error</span>
              </Label>
            </div>
          </RadioGroup>
        </FormItem>

        {/* Delivery Channels */}
        <FormItem>
          <FormLabel>Delivery Channels</FormLabel>
          <div className="grid gap-4 pt-2">
            <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <Label htmlFor="email">Email Notification</Label>
              </div>
              <Switch id="email" />
            </div>
            <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4" />
                <Label htmlFor="push">Push Notification</Label>
              </div>
              <Switch id="push" />
            </div>
            <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
              <div className="flex items-center space-x-2">
                <MessagesSquare className="w-4 h-4" />
                <Label htmlFor="account">Account Display Only</Label>
              </div>
              <Switch id="account" />
            </div>
          </div>
        </FormItem>

        {/* Target Audience */}
        <FormItem>
          <FormLabel>Target Audience</FormLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select target audience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              <SelectItem value="specific">Specific Users</SelectItem>
              <SelectItem value="premium">Premium Members</SelectItem>
              <SelectItem value="new">New Users</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>

        {/* Schedule */}
        <FormItem>
          <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4" />
              <Label htmlFor="schedule">Schedule Notification</Label>
            </div>
            <Switch
              id="schedule"
              checked={isScheduled}
              onCheckedChange={setIsScheduled}
            />
          </div>

          {isScheduled && (
            <div className="pt-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}
        </FormItem>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-4">
          <Button variant="outline" type="button">
            Save as Draft
          </Button>
          <Button type="submit">
            {isScheduled ? 'Schedule Notification' : 'Send Notification'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreateNotificationCard;
