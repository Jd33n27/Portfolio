import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Building Digital Assets That Scale';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Left align looks more premium/editorial
            justifyContent: 'center',
            backgroundColor: '#020617', // Your Dark Theme Background
            padding: '80px',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Status Pill on the Image */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(3, 70, 148, 0.2)', // Chelsea Blue Tint
              border: '1px solid #034694',
              borderRadius: '50px',
              padding: '10px 25px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                backgroundColor: '#22c55e', // Green Dot
                marginRight: '15px',
              }}
            />
            <span style={{ color: '#ffffff', fontSize: 24, letterSpacing: '1px' }}>
              AVAILABLE FOR NEW PROJECTS
            </span>
          </div>

          {/* Name as Authority */}
          <div style={{ 
            fontSize: 40, 
            color: '#64748b', // Muted text for hierarchy
            marginBottom: 20,
            textTransform: 'uppercase',
            letterSpacing: '4px',
            fontWeight: 700
          }}>
            Musa Jamaldeen
          </div>

          {/* The Hook (Title) */}
          <div style={{ 
            fontSize: 80, 
            fontWeight: 900, 
            color: 'white', 
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            {title}
          </div>

          {/* The Sub-Hook */}
          <div style={{ fontSize: 30, color: '#94a3b8', maxWidth: '800px' }}>
            Frontend Engineering • React Architecture • High-Performance Systems
          </div>
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