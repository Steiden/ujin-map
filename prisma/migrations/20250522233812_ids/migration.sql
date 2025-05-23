-- CreateTable
CREATE TABLE "event_interests" (
    "id" SERIAL NOT NULL,
    "event_id" INTEGER,
    "interest_id" INTEGER,

    CONSTRAINT "event_interests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "start_date" DATE,
    "end_date" DATE,
    "coordinate_one" DOUBLE PRECISION,
    "coordinate_two" DOUBLE PRECISION,
    "direction" TEXT,
    "executor" TEXT,
    "participants_count" INTEGER,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interests" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "color" TEXT,
    "img" TEXT,

    CONSTRAINT "interests_pkey" PRIMARY KEY ("id")
);
