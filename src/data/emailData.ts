import type { EmailMessage, EmailFolder } from '../types/email';

export const emailFolders: EmailFolder[] = [
  { id: 'inbox', name: 'Inbox', count: 127, unreadCount: 23 },
  { id: 'sent', name: 'Sent', count: 89, unreadCount: 0 },
  { id: 'drafts', name: 'Drafts', count: 12, unreadCount: 0 },
  { id: 'spam', name: 'Spam', count: 45, unreadCount: 8 },
  { id: 'trash', name: 'Trash', count: 34, unreadCount: 0 },
];

export const emailMessages: EmailMessage[] = [
  {
    id: 'email-001',
    from: 'john.smith@logistics.com',
    to: ['operations@slync.io'],
    subject: 'Urgent: Container CB-185901640 Delayed at Port',
    date: '2025-01-24T10:30:00Z',
    body: `Dear Operations Team,

I hope this email finds you well. I am writing to inform you about a critical delay affecting container CB-185901640.

The container has been held up at the port due to customs inspection requirements. The estimated delay is 2-3 business days.

Please update the customer immediately and adjust the delivery schedule accordingly.

Best regards,
John Smith
Port Operations Manager`,
    htmlBody: `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <p>Dear Operations Team,</p>
      <p>I hope this email finds you well. I am writing to inform you about a <strong>critical delay</strong> affecting container <span style="color: #0ea5e9; font-weight: bold;">CB-185901640</span>.</p>
      <p>The container has been held up at the port due to customs inspection requirements. The estimated delay is <em>2-3 business days</em>.</p>
      <p>Please update the customer immediately and adjust the delivery schedule accordingly.</p>
      <p>Best regards,<br/>
      <strong>John Smith</strong><br/>
      Port Operations Manager</p>
    </div>`,
    attachments: [
      { id: 'att-001', name: 'customs_notice.pdf', size: 245760, type: 'application/pdf' },
      { id: 'att-002', name: 'container_photos.zip', size: 1048576, type: 'application/zip' }
    ],
    isRead: false,
    isStarred: true,
    priority: 'high',
    size: 2048,
    folder: 'inbox'
  },
  {
    id: 'email-002',
    from: 'sarah.johnson@maersk.com',
    to: ['bookings@slync.io'],
    cc: ['operations@slync.io'],
    subject: 'Booking Confirmation - MAEU-229120444',
    date: '2025-01-24T09:15:00Z',
    body: `Hello,

This is to confirm your booking request for MAEU-229120444.

Booking Details:
- Container: 40HC x 2
- POL: Shanghai (CNSHA)
- POD: Rotterdam (NLRTM)
- ETD: July 1, 2025
- ETA: August 15, 2025

The booking has been confirmed and allocated. Please proceed with cargo preparation.

Regards,
Sarah Johnson
Maersk Line`,
    isRead: true,
    isStarred: false,
    priority: 'normal',
    size: 1024,
    folder: 'inbox'
  },
  {
    id: 'email-003',
    from: 'alerts@slync.io',
    to: ['operations@slync.io'],
    subject: 'System Alert: Exception Detected for CB-186512627',
    date: '2025-01-24T08:45:00Z',
    body: `AUTOMATED SYSTEM ALERT

An exception has been detected for booking CB-186512627:

Exception Type: Vessel Delay
Details: Vessel delayed due to port congestion
Impact: ETD postponed by 3 days
Action Required: Customer notification required

This is an automated message. Please do not reply.`,
    isRead: true,
    isStarred: false,
    priority: 'high',
    size: 512,
    folder: 'inbox'
  },
  {
    id: 'email-004',
    from: 'mike.chen@cosco.com',
    to: ['bookings@slync.io'],
    subject: 'Rate Quote Request - Asia to Europe Route',
    date: '2025-01-24T07:20:00Z',
    body: `Dear Slync Team,

We would like to request a rate quote for the following:

Route: Asia to Europe
Volume: 50 TEU per month
Commodity: Electronics
Duration: 12 months contract

Please provide your best rates and transit times.

Best regards,
Mike Chen
COSCO Shipping`,
    isRead: false,
    isStarred: false,
    priority: 'normal',
    size: 768,
    folder: 'inbox'
  },
  {
    id: 'email-005',
    from: 'lisa.wang@hm.com',
    to: ['customer.service@slync.io'],
    subject: 'Delivery Schedule Update Required',
    date: '2025-01-23T16:30:00Z',
    body: `Hi Team,

We need to update the delivery schedule for our upcoming shipments due to warehouse capacity constraints.

Can we reschedule the following deliveries:
- CB-185901640: Move from July 15 to July 20
- CB-185901641: Move from July 18 to July 22

Please confirm if this is possible.

Thanks,
Lisa Wang
H&M Logistics`,
    isRead: true,
    isStarred: true,
    priority: 'normal',
    size: 896,
    folder: 'inbox'
  },
  {
    id: 'email-006',
    from: 'noreply@customs.gov',
    to: ['compliance@slync.io'],
    subject: 'Customs Clearance Documentation Required',
    date: '2025-01-23T14:15:00Z',
    body: `OFFICIAL CUSTOMS NOTICE

The following shipments require additional documentation for customs clearance:

Shipment ID: CB-186512790
Missing Documents: 
- Commercial Invoice
- Packing List
- Certificate of Origin

Please submit the required documents within 48 hours to avoid delays.

Customs Authority
Port of Los Angeles`,
    attachments: [
      { id: 'att-003', name: 'customs_requirements.pdf', size: 512000, type: 'application/pdf' }
    ],
    isRead: false,
    isStarred: false,
    priority: 'high',
    size: 1536,
    folder: 'inbox'
  },
  {
    id: 'email-007',
    from: 'david.brown@evergreen.com',
    to: ['operations@slync.io'],
    subject: 'Vessel Schedule Update - EMC Service',
    date: '2025-01-23T11:45:00Z',
    body: `Dear Partners,

Please note the following vessel schedule updates for EMC service:

Week 30:
- EMC SHANGHAI: Delayed by 1 day
- EMC NINGBO: On schedule
- EMC QINGDAO: Advanced by 6 hours

Week 31:
- EMC SHANGHAI: On schedule
- EMC NINGBO: Delayed by 2 days

Please adjust your planning accordingly.

Best regards,
David Brown
Evergreen Marine`,
    isRead: true,
    isStarred: false,
    priority: 'normal',
    size: 1280,
    folder: 'inbox'
  },
  {
    id: 'email-008',
    from: 'billing@slync.io',
    to: ['finance@client.com'],
    subject: 'Invoice #INV-2025-0124 - Logistics Services',
    date: '2025-01-23T09:30:00Z',
    body: `Dear Finance Team,

Please find attached invoice #INV-2025-0124 for logistics services provided in January 2025.

Invoice Details:
- Amount: $15,750.00
- Due Date: February 15, 2025
- Services: Ocean freight, customs clearance, delivery

Payment can be made via wire transfer or ACH. Please contact us if you have any questions.

Best regards,
Slync Billing Department`,
    attachments: [
      { id: 'att-004', name: 'INV-2025-0124.pdf', size: 327680, type: 'application/pdf' }
    ],
    isRead: true,
    isStarred: false,
    priority: 'normal',
    size: 2048,
    folder: 'sent'
  },
  {
    id: 'email-009',
    from: 'support@slync.io',
    to: ['user@client.com'],
    subject: 'Welcome to Slync Platform',
    date: '2025-01-22T15:20:00Z',
    body: `Welcome to Slync!

Thank you for choosing Slync for your logistics management needs. Your account has been successfully created.

Getting Started:
1. Complete your company profile
2. Set up your shipping preferences
3. Invite team members
4. Start creating bookings

If you need any assistance, our support team is available 24/7.

Welcome aboard!
Slync Support Team`,
    isRead: true,
    isStarred: false,
    priority: 'normal',
    size: 1024,
    folder: 'sent'
  },
  {
    id: 'email-010',
    from: 'marketing@logistics-expo.com',
    to: ['info@slync.io'],
    subject: 'Invitation: Global Logistics Summit 2025',
    date: '2025-01-22T10:00:00Z',
    body: `Dear Slync Team,

You are cordially invited to participate in the Global Logistics Summit 2025.

Event Details:
- Date: March 15-17, 2025
- Location: Singapore Expo
- Theme: "Digital Transformation in Supply Chain"

As a leading logistics technology company, we would love to have Slync as a speaker or exhibitor.

Please let us know your interest by February 1st.

Best regards,
Logistics Expo Team`,
    isRead: false,
    isStarred: false,
    priority: 'low',
    size: 1152,
    folder: 'inbox'
  }
];