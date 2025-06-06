import styled from "styled-components";

interface ContainerProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}
export const Container = styled.section<ContainerProps>`
  margin-top: 15rem;
  padding: 0 2rem;
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      box-sizing: border-box;
      
      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        a > img {
          width: 3.0rem;
          height: 3.0rem;
        }
      }
      
      .body {
        flex: 1;
        overflow: hidden;
        
        h3 {
          margin-bottom: 1.5rem;
          font-size: 2rem;
        }

        p {
          letter-spacing: 0.05rem;
          margin-bottom: 2rem;
          line-height: 1.5;
          font-size: 1.4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          
          a {
            color: #FFFF;
            border-bottom: 1px solid var(--green);
            transition: color 0.25s;
            
            &:hover {
              color: var(--green);
            }
          }
        }
      }

      footer {
        margin-top: auto;
        
        .tech-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          font-size: 1.2rem;
          opacity: 0.8;
          
          li {
            background: rgba(0,0,0,0.2);
            padding: 0.3rem 0.8rem;
            border-radius: 0.5rem;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 10rem;
    
    h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
    
    .projects {
      grid-template-columns: 1fr;
      padding: 0;
      
      .project {
        padding: 1.5rem;
        
        header {
          margin-bottom: 2rem;
          
          svg {
            width: 40px;
          }
        }
        
        .body {
          p {
            -webkit-line-clamp: 5;
            font-size: 1.3rem;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    margin-top: 8rem;
    padding: 0 1rem;
    
    h2 {
      font-size: 2.5rem;
    }
    
    .projects {
      .project {
        padding: 1.2rem;
        
        .body {
          h3 {
            font-size: 1.8rem;
          }
          
          p {
            -webkit-line-clamp: 4;
          }
        }
        
        footer {
          .tech-list {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
`;