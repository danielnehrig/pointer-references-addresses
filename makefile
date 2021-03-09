#
# Makefile
# dNehrig, 2021-03-09 14:42
#

DIR := $(CURDIR)

all: rust-run go-run c-run cpp-run csharp-run ts-run

rust-run:
	@echo "Rust --"
	cd $(DIR)/rust
	cargo run

go-run:
	@echo "Go --"
	cd $DIR
	cd ./go
	go run main.go

c-run:
	@echo "C --"
	cd $DIR
	cd ./c
	gcc main.c
	./a.out

cpp-run:
	@echo "CPP --"
	cd $DIR
	cd ./c
	g++ main.cpp
	./a.out

csharp-run:
	@echo "CSHARP --"
	cd $DIR
	cd ./csharp
	dotnet run

ts-run:
	@echo "TYPESCRIPT --"
	cd $(DIR)
	cd ./ts
	yarn && yarn build && yarn start



# vim:ft=make
#
