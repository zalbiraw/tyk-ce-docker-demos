if [ ! -f .env ]
then
  cp .env.example .env
  tput setaf 2; echo "Created .env file."
fi

vim .env
