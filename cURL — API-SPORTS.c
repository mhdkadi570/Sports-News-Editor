# 1) مباريات اليوم لدوري معيّن (مثلاً LaLiga=140)
curl -H "x-apisports-key: YOUR_API_KEY" \
  "https://v3.football.api-sports.io/fixtures?league=140&date=2025-09-29"

# 2) أحداث مباراة محددة
curl -H "x-apisports-key: YOUR_API_KEY" \
  "https://v3.football.api-sports.io/fixtures/events?fixture=FIXTURE_ID"

# 3) جدول الترتيب للموسم الحالي (season يأتيك من رد fixtures)
curl -H "x-apisports-key: YOUR_API_KEY" \
  "https://v3.football.api-sports.io/standings?league=140&season=2025"
