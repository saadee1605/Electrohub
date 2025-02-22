import { Button } from "@/components/ui/button";
import categories from "@/Data/Categories";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="mt-48">
        <p className="text-3xl font-bold md:text-5xl text-center">
          Top Categories
        </p>
        <div className="grid mt-10 grid-cols-3 gap-5 px-4">
          {categories.map((category, index) => (
            <div key={index} className="space-y-4 border-r">
              <img
                src={category.image}
                alt=""
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="font-bold">{category.name}</p>
              <p>{category.description}</p>

              <div>
                <Link href={`/categories/${category.category}`}>
                  <Button>Explore Products</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
