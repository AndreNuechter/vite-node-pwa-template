#!/bin/bash

index_has_changes=false;

if [[ `git status --porcelain` ]];
    then index_has_changes=true;
fi

git stash --include-untracked;

if [[ "$index_has_changes" = true ]];
    then git stash pop stash@{0};
fi