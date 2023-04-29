import { S3 } from 'aws-sdk'

interface AWSConfig {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
  }
  
  const awsConfig: AWSConfig = {
    accessKeyId: process.env.AWS_S3_BUCKET_ACCESS_KEY ?? '',
    secretAccessKey: process.env.AWS_S3_BUCKET_SECRET_KEY ?? '',
    region: process.env.AWS_S3_BUCKET_REGION ?? '',
  };
  
  const s3 = new S3(awsConfig);