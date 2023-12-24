import { PrismaClient } from "@prisma/client";
import { execSync } from "child_process";

// TEST_DATABASE_URL には 'mysql://user:password@localhost:3306/db' のような文字列が入っている想定。
process.env.DATABASE_URL = `postgresql://postgres:postgres@postgres:5432/mydb-test-${process.env.JEST_WORKER_ID}`;;
const prisma = new PrismaClient()

beforeAll(async () => {
    console.log(process.env.DATABASE_URL);
    console.log(await prisma.user.findMany())
    // テストを実行する前に、前のテストで insert されたレコードを削除しつつ、スキーマも最新のものに更新する。
    execSync('npx prisma migrate reset --force --skip-seed && npx prisma db push', {
        // 公式ドキュメントでは process.env を継承することになってるけど、
        // 何故か実行時に process.env を書き換えて追加した環境変数は継承してくれないっぽい (おそらく Node.js のバグ)。
        // - https://nodejs.org/api/child_process.html#child_processexecsynccommand-options
        // 仕方がないので、明示的に上書きしたものを渡してる
        env: {
            ...process.env,
        },
    });
    console.log(await prisma.user.findMany())
});

afterAll(async () => {
    await prisma.$disconnect()
})