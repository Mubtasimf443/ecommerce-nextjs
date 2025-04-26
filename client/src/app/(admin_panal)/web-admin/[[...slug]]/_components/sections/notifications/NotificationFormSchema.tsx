/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import * as Yup from 'yup';

export const NotificationFormSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Title must be at least 5 characters')
    .max(100, 'Title must be less than 100 characters')
    .required('Title is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters')
    .required('Message is required'),
  notificationType: Yup.string()
    .oneOf(['info', 'success', 'warning', 'error'], 'Please select a valid notification type')
    .required('Notification type is required'),
  deliveryChannels: Yup.object().shape({
    email: Yup.boolean(),
    push: Yup.boolean(),
    account: Yup.boolean()
  }).test('at-least-one-channel', 'At least one delivery channel must be selected', 
    (value) => value.email || value.push || value.account
  ),
  targetAudience: Yup.string()
    .oneOf(['all', 'specific', 'premium', 'new'], 'Please select a valid target audience')
    .required('Target audience is required'),
  isScheduled: Yup.boolean(),
  scheduledDate: Yup.date().when('isScheduled', {
    is: true,
    then: (schema) => schema
      .min(new Date(), 'Scheduled date must be in the future')
      .required('Schedule date is required when scheduling is enabled'),
    otherwise: (schema) => schema.nullable()
  })
});

export type NotificationFormValues = unknown;

export const initialValues: NotificationFormValues = {
  title: '',
  message: '',
  notificationType: 'info',
  deliveryChannels: {
    email: false,
    push: false,
    account: false
  },
  targetAudience: '',
  isScheduled: false,
  scheduledDate: null
};