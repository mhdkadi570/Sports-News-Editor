const HOST = "https://v3.football.api-sports.io";
const KEY  = "YOUR_API_KEY"; // لا تضعه مكشوفاً في الإنتاج

async function apiGet(path) {
  const res = await fetch(HOST + path, { headers: { "x-apisports-key": KEY }});
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// 1) احضر مباريات يوم محدد (اليوم/الأمس) لدوري معيّن
const ymd = "2025-09-29"; // اضبطها حسب منطقتك الزمنية
const leagueId = 140;     // LaLiga مثال
const fx = await apiGet(`/fixtures?league=${leagueId}&date=${ymd}`);
const match = fx.response?.[0]; // اختَر واحدة من القائمة
const fixtureId = match.fixture.id;
const season    = match.league.season;
const roundStr  = match.league.round;    // مثل: "Regular Season - 7"
const scoreHome = match.goals.home;
const scoreAway = match.goals.away;

// 2) تفاصيل الأهداف/الطرد
const ev = await apiGet(`/fixtures/events?fixture=${fixtureId}`);
const events = ev.response || [];
const goals = events.filter(e => e.type === "Goal")
  .map(e => ({ player: e.player?.name, team: e.team?.name, minute: e.time?.elapsed }));
const reds  = events.filter(e => e.detail === "Red Card")
  .map(e => ({ player: e.player?.name, team: e.team?.name, minute: e.time?.elapsed }));

// 3) الترتيب
const st = await apiGet(`/standings?league=${leagueId}&season=${season}`);
const groups = st.response?.[0]?.league?.standings || [];
const table  = [].concat(...groups); // flatten
const homeRank = table.find(r => r.team.id === match.teams.home.id)?.rank ?? "—";
const awayRank = table.find(r => r.team.id === match.teams.away.id)?.rank ?? "—";
