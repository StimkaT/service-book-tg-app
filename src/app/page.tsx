import ButtonAdd from "@/components/ui/ButtonAdd";
import { prisma } from "@/lib/db";
import { User } from "@prisma/client"; // Теперь это будет работать!

export default async function Home() {
    const users = await prisma.user.findMany(); // Или car, если добавил модель

    return (
        <div className="text-green-500">
            <ButtonAdd></ButtonAdd>
            привет
            {/*{users.map((user: User)  => (*/}
            {/*    <div key={user.id}>{user.email}</div>*/}
            {/*))}*/}
        </div>
    );
}
