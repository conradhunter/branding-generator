import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '~/lib/stripe';

export async function GET(request: NextRequest) {
  const endpointSecret =
    'whsec_085ec2a9b39bee6b144ec78bb24ecb678bcae8834445ec326b4353379f744443';
}
