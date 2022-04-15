import Head from 'next/head';
import { getAllProjectsIds, getProjectsData } from '../../lib/projects';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Post = ({projectData}) => {
  return (
        <div>
            <Head>
                <title>{projectData.title}</title>

            </Head>

            <Navbar/> 
            <main className="container mx-auto px-5 lg:max-w-screen-md">
                <div>
                    <h1 className="text-5xl text-gray-900 font-nunito font-semibold">{projectData.title}</h1>
                </div>
                <div 
                    className="text-justify mt-4 font-Roboto markdown prose prose-lg prose-blue	text-background" 
                    dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} 
                />
            </main>
            <Footer/>
        </div>  
    );
};

export async function getStaticPaths() {
  const paths = getAllProjectsIds()
  return {
    paths,
    fallback: false
  }
};

export async function getStaticProps({ params }) {
  const projectData = await getProjectsData(params.id)
  return {
    props: {
      projectData
    }
  }
};

export default Post;