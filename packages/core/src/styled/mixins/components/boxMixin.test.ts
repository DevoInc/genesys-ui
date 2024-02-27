import { light as theme } from '@devoinc/genesys-brand-devo';

import { boxMixin } from './boxMixin';

describe('boxMixin', () => {
  test('render', () => {
    const mixin = boxMixin(theme)({}).join('');
    expect(mixin).toContain('position:;');
    expect(mixin).toContain('top:;');
    expect(mixin).toContain('right:;');
    expect(mixin).toContain('left:;');
    expect(mixin).toContain('bottom:;');
    expect(mixin).toContain('overflow:;');
    expect(mixin).toContain('z-index:;');
    expect(mixin).toContain('transform:;');
    expect(mixin).toContain('display:;');
  });

  test('position', () => {
    const mixin1 = boxMixin(theme)({ position: 'absolute' }).join('');
    expect(mixin1).toContain('position:absolute');

    const mixin2 = boxMixin(theme)({ elevation: 'raised' }).join('');
    expect(mixin2).toContain('position:relative');
    expect(mixin2).toContain(
      `z-index:${theme.alias.elevation.zIndex.depth.raised};`,
    );

    const mixin3 = boxMixin(theme)({
      positionTop: '0',
      positionRight: '0',
      positionLeft: '0',
      positionBottom: '0',
      zIndex: '3',
      flex: '1',
    }).join('');
    expect(mixin3).toContain('top:0;');
    expect(mixin3).toContain('left:0;');
    expect(mixin3).toContain('right:0;');
    expect(mixin3).toContain('bottom:0;');
    expect(mixin3).toContain('z-index:3;');
    expect(mixin3).toContain('flex:1;');
  });

  test('display', () => {
    const mixin1 = boxMixin(theme)({
      $display: 'block',
      cssTranslate: '42px, 42px',
      verticalAlign: 'center',
    }).join('');
    expect(mixin1).toContain('display:block;');
    expect(mixin1).toContain('transform:translate(42px, 42px);');
    expect(mixin1).toContain('vertical-align:center;');
  });

  test('clipping', () => {
    const mixin1 = boxMixin(theme)({ overflow: 'hidden' }).join('');
    expect(mixin1).toContain('overflow:hidden;');

    const mixin3 = boxMixin(theme)({
      overflowX: 'scroll',
      overflowY: 'visible',
    }).join('');
    expect(mixin3).toContain('overflow-x:scroll;');
    expect(mixin3).toContain('overflow-y:visible;');
  });

  test('elevation', () => {
    const mixin1 = boxMixin(theme)({ elevation: 'raised' }).join('');
    expect(mixin1).toContain(
      `border-radius:${theme.alias.shape.borderRadius.elevated};`,
    );
  });

  test('box model', () => {
    const mixin1 = boxMixin(theme)({
      alignSelf: 'start',
      margin: 'cmp-md',
      marginTop: 'cmp-md',
      marginRight: 'cmp-md',
      marginBottom: 'cmp-md',
      marginLeft: 'cmp-md',
      $width: '100%',
      maxWidth: '100%',
      minWidth: '100%',
      $height: '100%',
      maxHeight: '100%',
      minHeight: '100%',
      padding: 'cmp-md',
      paddingTop: 'cmp-md',
      paddingLeft: 'cmp-md',
      paddingRight: 'cmp-md',
      paddingBottom: 'cmp-md',
    }).join('');
    expect(mixin1).toContain('align-self:start');
    expect(mixin1).toContain(`margin:${theme.alias.space.cmp.md};`);
    expect(mixin1).toContain(`margin-top:${theme.alias.space.cmp.md};`);
    expect(mixin1).toContain(`margin-right:${theme.alias.space.cmp.md};`);
    expect(mixin1).toContain(`margin-bottom:${theme.alias.space.cmp.md};`);
    expect(mixin1).toContain(`margin-left:${theme.alias.space.cmp.md};`);
    expect(mixin1).toContain('width:100%');
    expect(mixin1).toContain('max-width:100%');
    expect(mixin1).toContain('min-width:100%');
    expect(mixin1).toContain('height:100%');
    expect(mixin1).toContain('max-height:100%');
    expect(mixin1).toContain('min-height:100%');
    expect(mixin1).toContain(`padding:${theme.alias.space.cmp.md};`);
    expect(mixin1).toContain(`padding-top:${theme.alias.space.cmp.md};`);
    expect(mixin1).toContain(`padding-right:${theme.alias.space.cmp.md};`);
    expect(mixin1).toContain(`padding-bottom:${theme.alias.space.cmp.md};`);
    expect(mixin1).toContain(`padding-left:${theme.alias.space.cmp.md};`);
  });
});
