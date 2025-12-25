import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<ContactEmailProps> = ({
  name,
  email,
  phone,
  organization,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <h2 style={{ color: '#ff6b35', borderBottom: '2px solid #ff6b35', paddingBottom: '10px' }}>
      New Contact Form Submission
    </h2>
    
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
      <p style={{ margin: '10px 0' }}>
        <strong>Name:</strong> {name}
      </p>
      <p style={{ margin: '10px 0' }}>
        <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
      </p>
      {phone && (
        <p style={{ margin: '10px 0' }}>
          <strong>Phone:</strong> {phone}
        </p>
      )}
      {organization && (
        <p style={{ margin: '10px 0' }}>
          <strong>Organization:</strong> {organization}
        </p>
      )}
    </div>
    
    <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3 style={{ color: '#333', marginTop: '0' }}>Message:</h3>
      <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', color: '#555' }}>
        {message}
      </p>
    </div>
    
    <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px', fontSize: '12px', color: '#666' }}>
      <p style={{ margin: '5px 0' }}>
        This email was sent from your website contact form on {new Date().toLocaleString()}
      </p>
    </div>
  </div>
);