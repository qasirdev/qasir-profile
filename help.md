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
<!--
https://www.youtube.com/watch?v=a_qbqpDifXM
https://www.youtube.com/watch?v=0siQoaXMmzk
https://www.youtube.com/watch?v=sUKptmUVIBM
-->
