import { useEffect, useState, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    // Function to update dimensions based on container and document size
    const updateDimensions = () => {
      if (!containerRef.current) return;
      
      // Get the full document height
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      
      setDimensions({
        width: window.innerWidth,
        height: Math.max(docHeight, window.innerHeight) // Use the larger of document height or viewport height
      });
    };
    
    // Initial dimension setup
    updateDimensions();
    
    // Set up resize observer to detect content changes
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    
    // Observe document body for content changes
    resizeObserver.observe(document.body);
    
    // Also handle window resize
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Particle settings with different shapes
    const particles = [];
    const particleCount = Math.floor(dimensions.width * dimensions.height / 5000); // Adjusted for larger area
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 1.2,
        speedY: (Math.random() - 0.5) * 1.2,
        alpha: Math.random() * 0.6 + 0.2,
        shape: Math.floor(Math.random() * 4), // 0: circle, 1: square, 2: triangle, 3: hexagon
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      });
    }
    
    // Energy nodes (glowing points)
    const energyNodes = [];
    const nodeCount = Math.floor(dimensions.width * dimensions.height / 25000);
    
    for (let i = 0; i < nodeCount; i++) {
      energyNodes.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 5 + 3,
        alpha: 0,
        maxAlpha: Math.random() * 0.8 + 0.4,
        speed: 0.01 + Math.random() * 0.03,
        direction: 1
      });
    }

    // Digital lines (data streams)
    const dataStreams = [];
    const streamCount = Math.floor(dimensions.width / 100);
    
    for (let i = 0; i < streamCount; i++) {
      dataStreams.push({
        x: Math.random() * dimensions.width,
        y: -Math.random() * 200,
        length: Math.random() * 150 + 50,
        width: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 2 + 1,
        segments: Math.floor(Math.random() * 3) + 2,
        alpha: Math.random() * 0.5 + 0.3
      });
    }
    
    // Draw a hexagon
    const drawHexagon = (x, y, size, rotation) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = rotation + (Math.PI * 2 / 6) * i;
        const pointX = x + size * Math.cos(angle);
        const pointY = y + size * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      ctx.closePath();
    };
    
    // Draw a triangle
    const drawTriangle = (x, y, size, rotation) => {
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = rotation + (Math.PI * 2 / 3) * i;
        const pointX = x + size * Math.cos(angle);
        const pointY = y + size * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      ctx.closePath();
    };
    
    // Animation loop
    let animationId;
    const animate = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw data streams (vertical lines)
      dataStreams.forEach(stream => {
        const gradient = ctx.createLinearGradient(
          stream.x, stream.y, 
          stream.x, stream.y + stream.length
        );
        gradient.addColorStop(0, `rgba(0, 210, 255, 0)`);
        gradient.addColorStop(0.4, `rgba(0, 210, 255, ${stream.alpha})`);
        gradient.addColorStop(0.6, `rgba(0, 210, 255, ${stream.alpha})`);
        gradient.addColorStop(1, `rgba(0, 210, 255, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = stream.width;
        ctx.beginPath();
        
        // Create segmented line
        let segLength = stream.length / stream.segments;
        for (let i = 0; i < stream.segments; i++) {
          const segY = stream.y + (i * segLength);
          if (i % 2 === 0) {
            ctx.moveTo(stream.x, segY);
            ctx.lineTo(stream.x, segY + (segLength * 0.8));
          }
        }
        
        ctx.stroke();
        
        // Update stream position
        stream.y += stream.speed;
        
        // Reset stream position when it goes off screen
        if (stream.y > dimensions.height) {
          stream.y = -stream.length;
          stream.x = Math.random() * dimensions.width;
        }
      });
      
      // Draw particles with different shapes
      particles.forEach(particle => {
        ctx.fillStyle = `rgba(0, 180, 255, ${particle.alpha})`;
        
        switch(particle.shape) {
          case 0: // Circle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            break;
            
          case 1: // Square
            ctx.save();
            ctx.translate(particle.x, particle.y);
            ctx.rotate(particle.rotation);
            ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
            ctx.restore();
            break;
            
          case 2: // Triangle
            ctx.save();
            ctx.translate(particle.x, particle.y);
            drawTriangle(0, 0, particle.size * 1.5, particle.rotation);
            ctx.fill();
            ctx.restore();
            break;
            
          case 3: // Hexagon
            ctx.save();
            ctx.translate(particle.x, particle.y);
            drawHexagon(0, 0, particle.size * 1.2, particle.rotation);
            ctx.fill();
            ctx.restore();
            break;
        }
        
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;
        
        // Wrap particles around screen
        if (particle.x < -particle.size * 2) particle.x = dimensions.width + particle.size;
        if (particle.x > dimensions.width + particle.size * 2) particle.x = -particle.size;
        if (particle.y < -particle.size * 2) particle.y = dimensions.height + particle.size;
        if (particle.y > dimensions.height + particle.size * 2) particle.y = -particle.size;
      });
      
      // Draw energy nodes
      energyNodes.forEach(node => {
        // Inner glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 3
        );
        gradient.addColorStop(0, `rgba(0, 210, 255, ${node.alpha})`);
        gradient.addColorStop(0.5, `rgba(0, 140, 255, ${node.alpha * 0.5})`);
        gradient.addColorStop(1, `rgba(0, 80, 255, 0)`);
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 240, 255, ${node.alpha * 1.2})`;
        ctx.fill();
        
        // Pulsing effect
        node.alpha += node.speed * node.direction;
        if (node.alpha >= node.maxAlpha || node.alpha <= 0.1) {
          node.direction *= -1;
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-full min-h-screen bg-black overflow-hidden"
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-transparent to-blue-900 opacity-30" />
    </div>
  );
}