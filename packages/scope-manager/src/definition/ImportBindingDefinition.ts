import { TSESTree } from '@typescript-eslint/experimental-utils';
import { DefinitionType } from './DefinitionType';
import { DefinitionBase } from './DefinitionBase';

class ImportBindingDefinition extends DefinitionBase<
  DefinitionType.ImportBinding,
  | TSESTree.ImportSpecifier
  | TSESTree.ImportDefaultSpecifier
  | TSESTree.ImportNamespaceSpecifier,
  TSESTree.ImportDeclaration
> {
  constructor(
    name: TSESTree.Identifier,
    node: ImportBindingDefinition['node'],
    decl: TSESTree.ImportDeclaration,
  ) {
    super(DefinitionType.ImportBinding, name, node, decl);
    this.isVariableDefinition = this.parent.importKind !== 'type';
  }

  public readonly isTypeDefinition = true;
  public readonly isVariableDefinition: boolean;
}

export { ImportBindingDefinition };