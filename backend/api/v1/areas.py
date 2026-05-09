from fastapi import APIRouter

router = APIRouter()

@router.get("/{qr_token}/checkin")
async def area_checkin(qr_token: str):
    # Endpoint simulado para check-in via QR Code no canteiro de obras
    return {
        "area_token": qr_token,
        "status": "Check-in realizado com sucesso",
        "riscos_ativos": [],
        "acoes_pendentes": []
    }