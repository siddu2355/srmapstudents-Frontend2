production:
while production in both env.development and in env.production write the below line
REACT_APP_API_URL=https://afternoon-plains-69747.herokuapp.com/

and in config.json
{
"apiUrl":"https://afternoon-plains-69747.herokuapp.com/"
}

development:
if development in both env.development and in env.production write the below line
REACT_APP_API_URL=http://127.0.0.1:8000/

and in config.json
{
"apiUrl":"http://127.0.0.1:8000/"
}
