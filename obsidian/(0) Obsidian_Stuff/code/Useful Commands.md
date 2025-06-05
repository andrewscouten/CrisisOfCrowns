
## Fixing Links

Power-shell command to replace linked files from a website into the same name obsidian link:

```
From:  [<NAME>](<URL>)
To:    [[<NAME>]]
```
```
Get-ChildItem -Recurse -Filter *.md | ForEach-Object {
	(Get-Content $_.FullName) -replace '(\[.+?\])(\(.+\))', '[$1]' | Set-Content $_.FullName
}
```
