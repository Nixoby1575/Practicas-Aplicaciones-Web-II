-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoExamen" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "indicaciones" TEXT NOT NULL,

    CONSTRAINT "TipoExamen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resultado" (
    "id" SERIAL NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "idTipoExamen" INTEGER NOT NULL,
    "resultadoExamen" TEXT NOT NULL,
    "valorPagado" INTEGER NOT NULL,
    "observaciones" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL,

    CONSTRAINT "Resultado_pkey" PRIMARY KEY ("id")
);
