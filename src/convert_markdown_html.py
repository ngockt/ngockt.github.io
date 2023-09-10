import glob
import markdown
import os

for filepath in glob.glob('docs/*.md'):
    filename = os.path.basename(filepath)
    with open(filename.replace('.md', '.html'), 'w') as f1:
        f1.write(markdown.markdown(open(filepath).read()))