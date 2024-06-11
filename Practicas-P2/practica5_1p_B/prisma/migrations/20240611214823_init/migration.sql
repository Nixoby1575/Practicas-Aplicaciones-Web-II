-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoExamen" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "indicaciones" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "TipoExamen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resultado" (
    "id" SERIAL NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "idTipoExamen" INTEGER NOT NULL,
    "resultado" TEXT NOT NULL,
    "valorPagado" DOUBLE PRECISION NOT NULL,
    "observaciones" TEXT,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Resultado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Resultado" ADD CONSTRAINT "Resultado_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resultado" ADD CONSTRAINT "Resultado_idTipoExamen_fkey" FOREIGN KEY ("idTipoExamen") REFERENCES "TipoExamen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
