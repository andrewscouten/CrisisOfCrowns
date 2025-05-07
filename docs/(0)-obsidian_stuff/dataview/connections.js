function get_connections(dv) {
    var name = dv.current().file.name;
    var parents = dv.current().parents ?? [];
    var siblings = dv.current().siblings ?? [];
    var children = dv.current().children ?? [];
    var partners = dv.current().partners ?? [];
    var allies = dv.current().allies ?? [];
    var enemies = dv.current().enemies ?? [];

    dv.paragraph("```mermaid\nflowchart LR\n" +
        // Person
        `Current[${name}]\n` +
        // Parents
        (parents.length > 0 ? `P[Parents]\nCurrent --> P\n${parents.map((parent, index) => `P${index + 1}[${parent}]:::internal-link\nP --> P${index + 1}\n`).join('')}` : '') +
        // Siblings
        (siblings.length > 0 ? `S[Siblings]\nCurrent --> S\n${siblings.map((sibling, index) => `S${index + 1}[${sibling}]:::internal-link\nS --> S${index + 1}\n`).join('')}` : '') +
        // Children
        (children.length > 0 ? `C[Children]\nCurrent --> C\n${children.map((child, index) => `C${index + 1}[${child}]:::internal-link\nC --> C${index + 1}\n`).join('')}` : '') +
        // Partners
        (partners.length > 0 ? `Part[Partners]\nCurrent --> Part\n${partners.map((partner, index) => `Part${index + 1}[${partner}]:::internal-link\nPart --> Part${index + 1}\n`).join('')}` : '') +
        // Allies group node (no internal-link applied)
        (allies.length > 0 ? `A[Allies]\nCurrent --> A\n${allies.map((ally, index) => `A${index + 1}[${ally}]:::internal-link\nA --> A${index + 1}\n`).join('')}` : '') +
        // Enemies group node (no internal-link applied)
        (enemies.length > 0 ? `E[Enemies]\nCurrent --> E\n${enemies.map((enemy, index) => `E${index + 1}[${enemy}]:::internal-link\nE --> E${index + 1}\n`).join('')}` : '') +
        // Styling: Apply internal-link only to individual nodes, not group nodes
        `class ` + 
        `${parents.length > 0 ? parents.map((_, index) => `P${index + 1},`).join('') : ''}` + 
        `Current${children.length > 0 ? children.map((_, index) => `C${index + 1},`).join('') : ''}` +
        `${siblings.length > 0 ? siblings.map((_, index) => `S${index + 1},`).join('') : ''}` +
        `${enemies.length > 0 ? enemies.map((_, index) => `E${index + 1},`).join('') : ''}` +
        `${allies.length > 0 ? allies.map((_, index) => `A${index + 1},`).join('') : ''} ` +
        `internal-link;`
    )
}

exports.get_connections = get_connections;
