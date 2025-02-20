// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-medium text-center">Convert Anything, Anywhere Free</h1>
                <h2 className="text-lg md:text-2xl text-center text-muted-foreground">Easily convert videos & images to any format in just a few clicks. Plus, generate perfect headings & descriptions effortlessly!</h2>

    
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
              Easily convert videos and images to any format in just a few clicks! Plus, generate compelling headings and descriptions effortlessly. Fast, simple, and efficient!
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />
      </div>
  );
}
