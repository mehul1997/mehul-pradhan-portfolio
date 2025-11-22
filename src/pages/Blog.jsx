import React from 'react';
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Microservices with Node.js",
      date: "March 15, 2024",
      readTime: "8 min read",
      author: "Mehul Pradhan",
      excerpt: "Learn how to architect and deploy microservices that can handle millions of requests while maintaining code quality and developer productivity.",
      content: `
        In today's fast-paced development environment, microservices have become the go-to architecture for building scalable applications.
        In this post, I'll share my experience building a microservices platform that handles over 10 million requests per day.

        ## Key Takeaways

        - **Service Discovery**: Implementing service discovery with Consul helped us manage dynamic service instances
        - **API Gateway**: Using Kong as our API gateway simplified authentication and rate limiting
        - **Message Queues**: RabbitMQ enabled asynchronous communication between services
        - **Containerization**: Docker and Kubernetes made deployment and scaling seamless

        ## Architecture Decisions

        When designing our microservices, we focused on three main principles:
        1. Single Responsibility - Each service does one thing well
        2. Fault Isolation - Failures in one service don't cascade
        3. Independent Deployment - Services can be updated without downtime

        The journey wasn't without challenges. We faced issues with data consistency, inter-service communication,
        and monitoring distributed systems. However, the benefits far outweighed the complexity once we established
        proper patterns and tooling.
      `,
      tags: ["Node.js", "Microservices", "Architecture", "DevOps"],
      image: "🏗️"
    },
    {
      id: 2,
      title: "React Performance Optimization: Beyond the Basics",
      date: "January 22, 2024",
      readTime: "6 min read",
      author: "Mehul Pradhan",
      excerpt: "Dive deep into advanced React performance optimization techniques that can significantly improve your application's user experience.",
      content: `
        Performance optimization in React goes far beyond just using React.memo and useMemo.
        Let me share some advanced techniques I've learned from optimizing large-scale React applications.

        ## Profiling First

        Before optimizing, I always profile using React DevTools Profiler. This helps identify actual bottlenecks
        rather than premature optimization. In one project, we discovered that a seemingly innocent list component
        was causing thousands of unnecessary re-renders.

        ## Advanced Techniques

        **1. Code Splitting at Scale**
        - Lazy load routes and heavy components
        - Use React.lazy() with Suspense
        - Implement strategic bundle splitting

        **2. Virtualization**
        - For long lists, use react-window or react-virtualized
        - Only render visible items in viewport
        - Reduced our initial render time by 70%

        **3. State Management Optimization**
        - Use Context API judiciously (it can cause unnecessary re-renders)
        - Consider Zustand or Jotai for better performance
        - Normalize state structure to avoid deep updates

        **4. Web Workers**
        - Offload heavy computations to Web Workers
        - Keep the main thread responsive
        - Used this for data processing in our analytics dashboard

        ## Real-World Impact

        After implementing these optimizations, we saw:
        - 60% reduction in Time to Interactive (TTI)
        - 45% improvement in Lighthouse performance score
        - Significantly better user engagement metrics

        Remember: Always measure the impact of your optimizations. Not every technique will work for every application.
      `,
      tags: ["React", "Performance", "JavaScript", "Frontend"],
      image: "⚡"
    },
    {
      id: 3,
      title: "My Journey into Open Source: Lessons Learned",
      date: "November 8, 2023",
      readTime: "5 min read",
      author: "Mehul Pradhan",
      excerpt: "Reflections on contributing to open source projects and how it transformed my development skills and career perspective.",
      content: `
        Two years ago, I made my first open source contribution. It was a simple documentation fix,
        but it opened doors I never imagined. Here's what I learned along the way.

        ## Starting Small

        My first contributions were:
        - Fixing typos in documentation
        - Adding code examples
        - Reporting detailed bug reports

        These small contributions helped me understand project workflows, coding standards, and community dynamics.

        ## Growing Confidence

        As I became more comfortable, I started:
        - Fixing small bugs
        - Adding new features
        - Reviewing pull requests from other contributors

        One of my proudest moments was having a feature I developed merged into a library used by thousands of developers.

        ## Key Lessons

        **1. Communication is Crucial**
        - Always discuss major changes before implementing
        - Write clear PR descriptions
        - Be responsive to feedback

        **2. Code Quality Matters**
        - Follow project conventions strictly
        - Write comprehensive tests
        - Document your changes

        **3. Community Over Code**
        - Be kind and patient with other contributors
        - Help newcomers get started
        - Celebrate others' contributions

        **4. Persistence Pays Off**
        - Don't get discouraged by rejected PRs
        - Learn from feedback
        - Keep improving

        ## Impact on My Career

        Contributing to open source has:
        - Improved my coding skills exponentially
        - Built my professional network
        - Led to job opportunities
        - Given me confidence in my abilities

        If you're considering contributing to open source, my advice is simple: just start.
        Find a project you use and love, and look for ways to give back. The community will welcome you.
      `,
      tags: ["Open Source", "Career", "Community", "Learning"],
      image: "🌟"
    },
    {
      id: 4,
      title: "Understanding Database Indexing: A Practical Guide",
      date: "September 3, 2023",
      readTime: "7 min read",
      author: "Mehul Pradhan",
      excerpt: "A comprehensive look at database indexing strategies and how to use them effectively to improve query performance.",
      content: `
        Database indexing can make or break your application's performance. Let me share practical insights
        from optimizing databases that handle billions of records.

        ## What Are Indexes?

        Think of indexes like a book's table of contents. Instead of scanning every page (table scan),
        you jump directly to relevant sections. Simple concept, but the implementation details matter.

        ## Types of Indexes

        **1. B-Tree Indexes (Most Common)**
        - Default in most databases
        - Great for range queries and sorting
        - Used these for our user lookup queries

        **2. Hash Indexes**
        - Excellent for exact match queries
        - Not suitable for range queries
        - Perfect for our session management system

        **3. Full-Text Indexes**
        - Specialized for text search
        - Essential for search functionality
        - Implemented for our blog search feature

        **4. Composite Indexes**
        - Index on multiple columns
        - Order matters significantly
        - Reduced our complex query time from 8s to 200ms

        ## When to Use Indexes

        Indexes are beneficial when:
        - Querying large tables frequently
        - Using WHERE, JOIN, or ORDER BY clauses
        - Columns have high cardinality

        ## When NOT to Use Indexes

        Avoid indexes when:
        - Table is small (< 1000 rows)
        - Column has low cardinality
        - Table has frequent INSERT/UPDATE operations

        ## Real-World Example

        We had a products table with 50 million rows. Query performance was terrible:

        \`\`\`sql
        -- Before: 45 seconds
        SELECT * FROM products
        WHERE category = 'electronics'
        AND price BETWEEN 100 AND 500
        ORDER BY created_at DESC;
        \`\`\`

        After adding a composite index:

        \`\`\`sql
        CREATE INDEX idx_products_category_price_created
        ON products(category, price, created_at);

        -- After: 0.3 seconds
        \`\`\`

        ## Monitoring and Maintenance

        - Use EXPLAIN to analyze query plans
        - Monitor index usage regularly
        - Remove unused indexes
        - Rebuild fragmented indexes

        Proper indexing transformed our database performance. What used to take minutes now completes in milliseconds.
      `,
      tags: ["Database", "PostgreSQL", "Performance", "SQL"],
      image: "🗄️"
    },
    {
      id: 5,
      title: "Building a Real-Time Chat Application with WebSockets",
      date: "June 18, 2023",
      readTime: "10 min read",
      author: "Mehul Pradhan",
      excerpt: "Step-by-step guide to building a production-ready real-time chat application using WebSockets, Redis, and React.",
      content: `
        Real-time communication is essential for modern web applications. I recently built a chat system
        supporting 100,000+ concurrent users. Here's everything I learned.

        ## Why WebSockets?

        Traditional HTTP polling is inefficient for real-time features. WebSockets provide:
        - Bidirectional communication
        - Low latency
        - Reduced overhead
        - True real-time experience

        ## Architecture Overview

        Our stack consisted of:
        - **Frontend**: React with Socket.io client
        - **Backend**: Node.js with Socket.io server
        - **Database**: MongoDB for message persistence
        - **Cache**: Redis for pub/sub and session management
        - **Load Balancing**: Nginx with sticky sessions

        ## Key Challenges and Solutions

        **1. Scaling WebSocket Connections**

        Single server limitations led us to implement a cluster:
        - Multiple Node.js instances
        - Redis adapter for Socket.io
        - Shared state across servers

        **2. Message Delivery Guarantees**

        We implemented:
        - Message acknowledgments
        - Retry logic with exponential backoff
        - Offline message queuing

        **3. Security Considerations**

        Critical security measures:
        - JWT-based authentication
        - Message validation and sanitization
        - Rate limiting per user
        - XSS prevention

        **4. Performance Optimization**

        - Message batching for high-frequency events
        - Compression for large payloads
        - Efficient room management
        - Connection pooling

        ## Code Highlights

        Here's our connection handling logic:

        \`\`\`javascript
        io.use(async (socket, next) => {
          try {
            const token = socket.handshake.auth.token;
            const user = await verifyToken(token);
            socket.user = user;
            next();
          } catch (err) {
            next(new Error('Authentication failed'));
          }
        });

        io.on('connection', (socket) => {
          console.log(\`User connected: \${socket.user.id}\`);

          socket.join(\`user:\${socket.user.id}\`);

          socket.on('message', async (data) => {
            const message = await saveMessage(data);
            io.to(\`room:\${data.roomId}\`).emit('new_message', message);
          });
        });
        \`\`\`

        ## Monitoring and Observability

        We implemented comprehensive monitoring:
        - Connection metrics (active, failed, latency)
        - Message throughput
        - Error rates
        - Resource utilization

        ## Results

        After six months in production:
        - 99.9% uptime
        - < 100ms message latency
        - 100,000+ concurrent connections
        - Millions of messages daily

        Building real-time features is challenging but incredibly rewarding. The key is starting with solid
        architecture and iterating based on real-world usage patterns.
      `,
      tags: ["WebSockets", "Node.js", "Real-time", "Socket.io", "Redis"],
      image: "💬"
    }
  ];

  return (
    <div className="page-container blog-page">
      <div className="blog-header">
        <h1>Blog</h1>
        <p className="subtitle">Thoughts on software development, technology, and continuous learning</p>
      </div>

      <div className="blog-posts">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post">
            <div className="post-icon">{post.image}</div>

            <div className="post-meta">
              <span className="post-date">📅 {post.date}</span>
              <span className="post-read-time">⏱️ {post.readTime}</span>
              <span className="post-author">✍️ {post.author}</span>
            </div>

            <h2 className="post-title">{post.title}</h2>

            <p className="post-excerpt">{post.excerpt}</p>

            <div className="post-content">
              {post.content.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="post-tags">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>

            <div className="post-divider"></div>
          </article>
        ))}
      </div>

      <div className="blog-stats">
        <div className="stat-item">
          <h3>{blogPosts.length}</h3>
          <p>Articles Published</p>
        </div>
        <div className="stat-item">
          <h3>{blogPosts.reduce((acc, post) => acc + parseInt(post.readTime), 0)} min</h3>
          <p>Total Reading Time</p>
        </div>
        <div className="stat-item">
          <h3>{new Set(blogPosts.flatMap(post => post.tags)).size}</h3>
          <p>Topics Covered</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
