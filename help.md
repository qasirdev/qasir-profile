### For installation:
```
npx create-next-app@latest ./

npm install --save-dev three react-intersection-observer @react-three/drei @react-three/fiber framer-motion maath

npm i react-icons @heroicons/react
```

### Docker & docker-compose:
create Dockerfile and run command
```
docker build -t qasir-profile . //to build image
docker run -d --name qasir-profile-website -p 3001:3000 qasir-profile //to build container
```

To use docker-compose create file docker-compose.yml in root and run command
```
docker-compose up --build
```

create file with the name makefile and then run command:
```
make up
```
### To deploy on AWS:
- with in local downloaded key folder, open terminal:
  ssh -i "qasir-profile-key.pem" ubuntu@ec2-51-20-227-252.eu-north-1.compute.amazonaws.com
```
	sudo apt-get install npm
	sudo npm install -g n

	npm install
	npm run build
	npx serve@latest -n out
	netstat -tulnp //to check open ports

	//to run all the time use forever/ pm2
	sudo npm install -g forever
	sudo forever start -c "npm run next start -p 80" ./

	chmod 400 /Users/qasirmehmood/Downloads/qasir-profile-key1.pem //to setup permision on file
	pm2 start npm --name "qasir-profile" --interpreter bash -- start
	pm2 start --name=qasir-profile npm -- start
	pm2 show qasir-profile
	pm2 monit
	pm2 restart qasir-profile
```
<!--
AWS:
https://www.youtube.com/watch?v=oaK223BiTBU
Docker:
https://www.youtube.com/watch?v=a_qbqpDifXM
Profile:
https://www.youtube.com/watch?v=0siQoaXMmzk
https://www.youtube.com/watch?v=sUKptmUVIBM
4 projects:
https://www.youtube.com/watch?v=06SbKj2aLTg
-->
