#!/bin/bash
yarn install
yarn start
exec "$@"
