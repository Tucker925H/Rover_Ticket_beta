import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main className="grid lg:grid-cols-3 px-4 py-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            dolorum consequatur saepe blanditiis sed? Eos dolores, ducimus vero
            ex, nobis quis repellat ratione, aliquam quasi quia veritatis.
            Suscipit, ab nulla!
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={'/'} className='text-blue-500'>Read More</Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            dolorum consequatur saepe blanditiis sed? Eos dolores, ducimus vero
            ex, nobis quis repellat ratione, aliquam quasi quia veritatis.
            Suscipit, ab nulla!
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/create-project">Read more</Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            dolorum consequatur saepe blanditiis sed? Eos dolores, ducimus vero
            ex, nobis quis repellat ratione, aliquam quasi quia veritatis.
            Suscipit, ab nulla!
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/create-project"}>Read more</Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
