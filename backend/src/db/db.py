import os
from dotenv import load_dotenv
from fastapi import HTTPException
from supabase import Client, create_client

load_dotenv()

async def get_supabase() -> Client:

    database_url = os.getenv("SUPABASE_URL")
    database_key = os.getenv("SUPABASE_KEY")

    # print(database_url)

    if not database_url:
        raise HTTPException(status_code=500, detail="Supabase URL not found")

    if not database_key:
        raise HTTPException(status_code=500, detail="Supabase KEY not found")

    supabase_client: Client = create_client(database_url, database_key)

    return supabase_client