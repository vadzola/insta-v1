import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8N4UEMzYX5SnxG0B5cozBLUjcn6lWj5pX6WlQ8M3u7nNnxKyfeMZFUOuc4z5_fK579ik&usqp=CAU"
           layout="fill" 
            className="object-contain"
          />
        </div>
        <div>
          <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              layout="fill"
              className="object-contain"
            />
          </div>
          
        </div>
        <h1>Right side</h1>
      </div>
    </div>
  );
}
