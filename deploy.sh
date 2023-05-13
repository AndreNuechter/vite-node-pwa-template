#!/bin/bash

function main() {
    local index_is_dirty=false;

    if [[ `git status --porcelain` ]];
        then index_is_dirty=true;
    fi

    git stash --include-untracked;

    npm run build;
    git add docs/.;
    git commit --amend --no-edit;
    # git push --all;

    if [[ "$index_is_dirty" = true ]];
        then git stash pop stash@{0};
    fi
}

main