run: server run-web

run-web:
	cd web && npm run start-dev
server:
	cd api && npm run dev 