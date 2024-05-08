import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function eliminarTransaccion(id: number): Promise<void> {
    await prisma.resultado.update({
        where: { id },
        data: { estado: false },
    });
}

export async function recuperarTransaccion(id: number): Promise<void> {
    await prisma.resultado.update({
        where: { id },
        data: { estado: true },
    });
}
