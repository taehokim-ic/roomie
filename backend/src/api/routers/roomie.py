from fastapi import APIRouter, Depends, HTTPException, Body
from src.db.db import get_supabase

router = APIRouter()

async def get_supabase(supabase=Depends(get_supabase)):
    return supabase

@router.get("/search/", status_code=200)
async def get_percentile(area: str | None = None, supabase=Depends(get_supabase)):
    
    if area is None:
        response = supabase.table('roomie_profiles').select('*').execute()
    else:
        try: 
            response = supabase.table('roomie_profiles').select('*').eq('location', area).execute()
        
        #     # if not (0 < area <= 100):
        #     #     raise HTTPException(status_code=400, detail="Area must be between 0 and 100")

        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    data = {
        'people': response.data
    }
    
    return data
    
# @router.post("/details", status_code=201)
# async def submit_details(details: ContactDetails, supabase=Depends(get_supabase)):

#     address = details.address
#     area = details.area
#     phone_number = details.phone_number
#     papering_date = details.papering_date
    
#     try: 
#         supabase.table("quote_reqs").insert({
#                                             "area": area, 
#                                             "address": address, 
#                                             "phone_number": phone_number, 
#                                             "papering_date": str(papering_date)}).execute()
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))
    
#     return {"status": "success", "message": "Details submitted successfully", "data": details.dict()}