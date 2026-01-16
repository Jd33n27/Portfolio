import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    // You can pass ?title=MyProject in the URL to make it dynamic
    const title = searchParams.get('title') || 'My Portfolio';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#034694',
            color: 'white',
          }}
        >
          <div style={{ fontSize: 60, fontWeight: 'bold' }}>Musa Jamaldeen</div>
          <div style={{ fontSize: 30, marginTop: 20 }}>{title}</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: unknown) {
    console.error(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}