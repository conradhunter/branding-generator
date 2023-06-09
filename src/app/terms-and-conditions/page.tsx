import React from 'react';

export const metadata = {
  title: 'Terms & Conditions',
};

const page = () => {
  return (
    <section className='px-[15%] py-20'>
      <div className='text-gray-100'>
        <h1 className='mb-4 text-4xl'>Terms and Conditions</h1>
        <p className='mb-4'>
          These terms and conditions (&quot;Agreement&quot;) govern your access
          to and use of BrandingGeneratorAI (&quot;the Service&quot;) provided
          by BrandingGeneratorAI, Inc. (&quot;the Company&quot;). By using the
          Service, you agree to be bound by this Agreement.
        </p>

        <h2 className='mb-2 text-2xl'>1. Description of Service</h2>
        <p className='mb-4'>
          BrandingGeneratorAI is a SaaS product that utilizes the OpenAI API to
          generate branding materials. The Service allows users to create and
          customize branding assets such as logos, slogans, and names. Payment
          for the Service is processed through Stripe, and user authentication
          is handled by Clerk.
        </p>

        <h2 className='mb-2 text-2xl'>2. User Obligations</h2>
        <p className='mb-4'>By using the Service, you agree to:</p>
        <ul className='mb-4 ml-8 list-disc'>
          <li>
            Provide accurate and complete information when creating an account.
          </li>
          <li>Maintain the security of your account login credentials.</li>
          <li>
            Use the Service in compliance with applicable laws and regulations.
          </li>
          <li>
            Not engage in any activity that may interfere with or disrupt the
            Service.
          </li>
        </ul>

        <h2 className='mb-2 text-2xl'>3. Intellectual Property</h2>
        <p className='mb-4'>
          The Service, including any branding materials generated through the
          Service, remains the intellectual property of the Company. You are
          granted a non-exclusive, non-transferable license to use the generated
          branding materials for your own business purposes. You may not sell,
          license, distribute, or otherwise exploit the branding materials
          generated by the Service without the Company&apos;s prior written
          consent.
        </p>

        <h2 className='mb-2 text-2xl'>4. Payment and Billing</h2>
        <p className='mb-4'>
          Payment for the Service is processed through Stripe. By using the
          Service, you authorize the Company to charge your selected payment
          method for the applicable fees. All fees are non-refundable unless
          otherwise stated.
        </p>

        <h2 className='mb-2 text-2xl'>5. Termination</h2>
        <p className='mb-4'>
          The Company reserves the right to suspend or terminate your access to
          the Service at any time without notice, for any reason, including but
          not limited to a violation of this Agreement. Upon termination, your
          access to the Service and any generated branding materials will be
          revoked.
        </p>

        <h2 className='mb-2 text-2xl'>6. Disclaimer of Warranty</h2>
        <p className='mb-4'>
          The Service is provided &quot;as is&quot; and without warranties of
          any kind, whether express or implied. The Company does not warrant
          that the Service will be error-free, uninterrupted, or secure. Your
          use of the Service is at your own risk.
        </p>

        <h2 className='mb-2 text-2xl'>7. Limitation of Liability</h2>
        <p className='mb-4'>
          In no event shall the Company be liable for any direct, indirect,
          incidental, consequential, special, or exemplary damages arising out
          of or in connection with the Service, whether based on contract, tort,
          strict liability, or other legal theory.
        </p>

        <h2 className='mb-2 text-2xl'>8. Governing Law</h2>
        <p className='mb-4'>
          This Agreement shall be governed by and construed in accordance with
          the laws of [your jurisdiction].
        </p>

        <h2 className='mb-2 text-2xl'>9. Changes to the Agreement</h2>
        <p className='mb-4'>
          The Company reserves the right to modify or update this Agreement at
          any time. Any changes to the Agreement will be effective upon posting
          the revised version on the BrandingGeneratorAI website. Continued use
          of the Service after the changes constitutes your acceptance of the
          modified Agreement.
        </p>

        <h2 className='mb-2 text-2xl'>10. Contact Information</h2>
        <p className='mb-4'>
          If you have any questions or concerns about this Agreement, please
          contact us at support@brandinggeneratorai.com
        </p>
      </div>
    </section>
  );
};

export default page;
