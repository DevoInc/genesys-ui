# Changelog

## [6.0.0](https://github.com/DevoInc/genesys-ui/compare/v5.0.0...v6.0.0) (2024-02-08)


### ⚠ BREAKING CHANGES

* split form package to core, color, and upload
* **table:** fix the change on the actions for use directly the icons

### Features

* added onChange prop to several components and optimized and tokenized the ActionRenderer. ([998cb32](https://github.com/DevoInc/genesys-ui/commit/998cb32645efa3fa726f91de1e86cf19eadee8a0))
* split form package to core, color, and upload ([3683d1c](https://github.com/DevoInc/genesys-ui/commit/3683d1c5e4b58a09e14f54915fad9cbb2c275146))
* **table:** memoize the iconSize for ActionRenderer ([538ec2f](https://github.com/DevoInc/genesys-ui/commit/538ec2f11b4723660c529640d93f9cf331547f10))


### Bug Fixes

* **table:** fix the change on the actions for use directly the icons ([c6ad258](https://github.com/DevoInc/genesys-ui/commit/c6ad258a619681a72b6ee962046cea5b3c20bbb2))

## [5.0.0](https://github.com/DevoInc/genesys-ui/compare/v4.4.0...v5.0.0) (2024-02-07)


### ⚠ BREAKING CHANGES

* In AppBar component, the props 'actions', 'options' and 'customContent' has been removed. Now this kind of content is defined directly in 'children' prop. In addition, the name of 'tabItems' prop has been changed to 'tabs'.

### Features

* New way of defining the content on the AppBar and removed default value for gutterBottom in Typography.Paragraph ([5e2c3fd](https://github.com/DevoInc/genesys-ui/commit/5e2c3fd235e92f115eaefecc2b0829d473139e14))
* **SelectControl:** added default values for some props. ([bd3d21c](https://github.com/DevoInc/genesys-ui/commit/bd3d21cf3f1a34070dda39b8f2418ad64db75115))


### Bug Fixes

* fixed tests ([ef8941f](https://github.com/DevoInc/genesys-ui/commit/ef8941f2754a5b15518ce869cdf61fe3c1f9fa96))

## [4.4.0](https://github.com/DevoInc/genesys-ui/compare/v4.3.0...v4.4.0) (2024-02-06)


### Features

* **FloatPanel:** code internal structure improvements. ([5584dd3](https://github.com/DevoInc/genesys-ui/commit/5584dd3e0e52ba6e71e6448259d22777fa9b07c2))
* **FloatPanel:** removed unnecessary components and added stories ([da04bfd](https://github.com/DevoInc/genesys-ui/commit/da04bfdaa1e1268c94cd3c7d16716270daad24a1))
* **SelectControl:** QUV-2109 added subtle variant. ([db19d4f](https://github.com/DevoInc/genesys-ui/commit/db19d4ff8424650b222af0070feeb81cf66456ac))
* several components code improvements ([f4867f1](https://github.com/DevoInc/genesys-ui/commit/f4867f1512f07104ea7a1969c847ec6544068985))
* **table:** added OptionsFilter with subtle select control ([3bf08b4](https://github.com/DevoInc/genesys-ui/commit/3bf08b4a3810f7e1d1d230cc7f7a91d36f0a30c3))


### Bug Fixes

* added extension for imported file ([bf75da8](https://github.com/DevoInc/genesys-ui/commit/bf75da83ab30d47ecdeb0c276ec99112345cb029))
* fixed lint problem ([224d727](https://github.com/DevoInc/genesys-ui/commit/224d727c5a5832f056595a1aa97695dacfd05d5b))

## [4.3.0](https://github.com/DevoInc/genesys-ui/compare/v4.2.0...v4.3.0) (2024-02-02)


### Features

* **AppLayout:** code internal structure improvements. ([0aa94c8](https://github.com/DevoInc/genesys-ui/commit/0aa94c8538ef16b39d2641271fb6345d68870e95))
* **Avatar:** code internal structure improvements. ([e21491d](https://github.com/DevoInc/genesys-ui/commit/e21491dcbcfef7f1445039d9a6c2fe3506a89d9f))
* **Badge:** code internal structure improvements. ([f3436f2](https://github.com/DevoInc/genesys-ui/commit/f3436f29f5560ffac351db2dfebe2c76bb2aeec3))
* **Banner:** code internal structure improvements. ([6461e7c](https://github.com/DevoInc/genesys-ui/commit/6461e7c16e44c16d563701461b4b0907a04e575c))
* **Button:** code internal structure improvements. ([fdf1e88](https://github.com/DevoInc/genesys-ui/commit/fdf1e88dcea27260de1d7b2dbeddf31f7887a30e))
* **ButtonGroup:** code internal structure improvements. ([3a5c75e](https://github.com/DevoInc/genesys-ui/commit/3a5c75e3b18ea1a6a05ca74afe87425eb81f7881))
* **Chip:** code internal structure improvements. ([e83fd65](https://github.com/DevoInc/genesys-ui/commit/e83fd65cd67441b6dd9852b0573d9121a36fd7ff))
* **ChipGroup:** code internal structure improvements. ([1a5e9ef](https://github.com/DevoInc/genesys-ui/commit/1a5e9ef58b85b0461297191ba9d251485f2ccbeb))
* **ChoiceGroup:** code internal structure improvements. ([8d142a3](https://github.com/DevoInc/genesys-ui/commit/8d142a35e323c59e6913b55978a34f022b68dbb8))
* **Collapse:** code internal structure improvements. ([5fd19bc](https://github.com/DevoInc/genesys-ui/commit/5fd19bc76e1f03569e2fe58e8d30626691bc80a4))
* **ContentSwitcher:** code internal structure improvements. ([8bd6123](https://github.com/DevoInc/genesys-ui/commit/8bd61233ad046fc624d8168c43d645fffae3431e))
* **DateTime:** QUV-1302 Included Css overlapping and polymorphism in date-time components. ([614da4f](https://github.com/DevoInc/genesys-ui/commit/614da4f6712cfcbff2d175bd75d471145e084fbc))
* **Field:** added some documentation ([859d066](https://github.com/DevoInc/genesys-ui/commit/859d066ecef419fa1edc2dd91eda318ec4af4560))
* **Field:** code internal structure improvements. ([a1206f4](https://github.com/DevoInc/genesys-ui/commit/a1206f428b2041fbc242ebe7134804bf46185aaa))
* **Field:** some new documentation ([7efd8c4](https://github.com/DevoInc/genesys-ui/commit/7efd8c41cdfb536523e308a5c9ac5b0b0bfba649))
* improvements for Helper, InlineMessage and FloatingHelper. ([1f08c0f](https://github.com/DevoInc/genesys-ui/commit/1f08c0f4f9192f17efb0815e5be91f97adba1f68))
* **table:** added bulk preset ([7326f8d](https://github.com/DevoInc/genesys-ui/commit/7326f8d33b0d88ec3cde6e7f538dff8cb9c5a337))
* **table:** added colDef prop headerOnFilterPosition ([ed78e12](https://github.com/DevoInc/genesys-ui/commit/ed78e12932954969ece61e3ecff9832929b2766a))
* **table:** added filterColDefByFilterStruct helper ([211dca4](https://github.com/DevoInc/genesys-ui/commit/211dca4064869979b7093a09147c9d5af0fb0905))
* **table:** added helper order colDefs & fixed typo helper filter colDefs ([8d0c9d0](https://github.com/DevoInc/genesys-ui/commit/8d0c9d0428db8d970ae5c5fe575a30f7a5dede55))
* **table:** added indicators to the filters and clear buttons ([bb20cda](https://github.com/DevoInc/genesys-ui/commit/bb20cda3e75e46bf3070af68a8b1307af5359111))
* **table:** initial implementation of filters ([61a4afe](https://github.com/DevoInc/genesys-ui/commit/61a4afe234502b042c28ff3eae04a61938d79398))
* **table:** TextRenderer show tooltip ([fe1b545](https://github.com/DevoInc/genesys-ui/commit/fe1b545fe74af1a852c4ccfe57010e3ad4d4ce86))


### Bug Fixes

* fixed build problems ([60f732a](https://github.com/DevoInc/genesys-ui/commit/60f732a8ada765e4f06493763555ed558a0115d6))
* fixed display name. ([f00bc8e](https://github.com/DevoInc/genesys-ui/commit/f00bc8e68a1822316ff17717d9ea0003409c0332))
* **InlineMessage:** added param to the children function to get the computed placement and render the border in the correct place. ([130da6f](https://github.com/DevoInc/genesys-ui/commit/130da6f8bbd2d6dbf047387f2a7899616cfe6977))
* Made 'setOpen' property optional in MenuEntry component ([a114e9f](https://github.com/DevoInc/genesys-ui/commit/a114e9f8aa6cabc27dfcdaaf0cd0d2397eeb2f78))
* Refactor bulk actions and action renderer for improved menu handling ([32db34b](https://github.com/DevoInc/genesys-ui/commit/32db34b75b723b3c8e4f90c6646f8eeadd820895))
* removed classname from interfaces. ([e707100](https://github.com/DevoInc/genesys-ui/commit/e7071007610fc28afbac4d6a0402740ae4857744))
* **table:** actions with quiet scheme and menu with three vertical dots ([26c70a6](https://github.com/DevoInc/genesys-ui/commit/26c70a69fa5b4b394ecd4cec3809ebc9b95e2eaf))
* **table:** comment out the unfinished cellFilters from presets ([e872225](https://github.com/DevoInc/genesys-ui/commit/e872225b241a4cee65ad30f812dbb97f93540ab1))
* **table:** right header size ([5c175a3](https://github.com/DevoInc/genesys-ui/commit/5c175a37d4138a42076fe642ad0a6ee5ac7abd18))
* **table:** several filters could apply to the same row ([f28f6c6](https://github.com/DevoInc/genesys-ui/commit/f28f6c650ec325b664f9efeabbd6f2710cbc4275))
* **table:** several glitches on the filters ([6b81a9e](https://github.com/DevoInc/genesys-ui/commit/6b81a9e73abec137de91be0623cad6cbc88fc7d7))


### Vulnerabilities

* **deps-dev:** bump vite from 5.0.11 to 5.0.12 ([cc600ab](https://github.com/DevoInc/genesys-ui/commit/cc600ab3a34064a829312c12ab0a01b438e91ed3))

## [4.2.0](https://github.com/DevoInc/genesys-ui/compare/v4.1.0...v4.2.0) (2024-01-21)


### Features

* **Popover:** added null option to the appendTo prop to avoid render de popover content at the end of the body (default behavior). ([bf99b7c](https://github.com/DevoInc/genesys-ui/commit/bf99b7cabc2501f60cecd0039f938fc1fd305a54))

## [4.1.0](https://github.com/DevoInc/genesys-ui/compare/v4.0.1...v4.1.0) (2024-01-19)


### Features

* **PopoverPanel:** the default padding is not applied if the children are Panel components. ([3d90472](https://github.com/DevoInc/genesys-ui/commit/3d90472bb5d1209c31459fc2e738222cfa3c80f0))
* QUV-1007 Improved the behavior of the icons in Input and Select components. ([b1ad869](https://github.com/DevoInc/genesys-ui/commit/b1ad869b1761e075733022aaec9ae2738f3ff5dc))

## [4.0.1](https://github.com/DevoInc/genesys-ui/compare/v4.0.0...v4.0.1) (2024-01-19)


### Bug Fixes

* **ColorPicker:** some recent new props have to be optional instead of required. ([a700091](https://github.com/DevoInc/genesys-ui/commit/a7000914c094b0c20ad0265fddb782104f7b98be))

## [4.0.0](https://github.com/DevoInc/genesys-ui/compare/v3.2.0...v4.0.0) (2024-01-17)


### ⚠ BREAKING CHANGES

* Use Popover component instead of deleted Popper. Use new pre-defined children components for FieldsCombiner instead of elem props.

### Features

* Deleted Popper component and new way to define the FieldsCombiner children. ([0bca31c](https://github.com/DevoInc/genesys-ui/commit/0bca31c7fca4eb60e9fdcc55437869173a606e4f))

## [3.2.0](https://github.com/DevoInc/genesys-ui/compare/v3.1.1...v3.2.0) (2024-01-17)


### Features

* **table:** added declarations to main module ([266451a](https://github.com/DevoInc/genesys-ui/commit/266451a6c1ef16e71e05cf22776e8623e7d2b70a))


### Bug Fixes

* **table:** several sorting problems ([d7f7ebe](https://github.com/DevoInc/genesys-ui/commit/d7f7ebeb72668af18fd6d25d1d032816481bfae4))
* **table:** temporal fix of table height ([d77e2a9](https://github.com/DevoInc/genesys-ui/commit/d77e2a9c6965ece7606187456b43d417e48d663d))

## [3.1.1](https://github.com/DevoInc/genesys-ui/compare/v3.1.0...v3.1.1) (2024-01-16)


### Bug Fixes

* export helper orderDataByOrderStruct ([b169b92](https://github.com/DevoInc/genesys-ui/commit/b169b923a7030343bc23302e5c93f2bb3b712dbb))

## [3.1.0](https://github.com/DevoInc/genesys-ui/compare/v3.0.1...v3.1.0) (2024-01-15)


### Features

* **InlineMessage:** Use of Popover instead of Popper and other Improvements for InlineMessage ([20ad1bf](https://github.com/DevoInc/genesys-ui/commit/20ad1bfacbfce8b0c2ccda5d19d6df7d337e396e))


### Bug Fixes

* **code:** update default value for wordBasedSuggestions ([3088087](https://github.com/DevoInc/genesys-ui/commit/3088087ba127415bdd81aa1b8c4999446687a749))
* **FloatingHelper:** fixed removed props. ([72fd1e3](https://github.com/DevoInc/genesys-ui/commit/72fd1e3eb602844ad2139f68897d7a923ea63b52))

## [3.0.1](https://github.com/DevoInc/genesys-ui/compare/v3.0.0...v3.0.1) (2024-01-15)

## [3.0.0](https://github.com/DevoInc/genesys-ui/compare/v2.4.0...v3.0.0) (2024-01-12)

### ⚠ BREAKING CHANGES

* Renamed DateTimePicker to DateTimeFloatingPicker
* DateTimePicker turns into a DateTime docked selector
* Renamed Dropdown to Popover

### Features

* Adapted Table blocks to new Dropdown component and its accessibility requirements. ([85ba241](https://github.com/DevoInc/genesys-ui/commit/85ba24137695822e71b33f6b37135043984df5f7))
* adapted Table Dropdowns to new definition of the component ([8d63f5b](https://github.com/DevoInc/genesys-ui/commit/8d63f5b3ebebd4070d2f8bf3c0df91be7c9de23c))
* add sortable condtion columns ([0fe708f](https://github.com/DevoInc/genesys-ui/commit/0fe708f40c5e192ad576e007400def72cf258dd0))
* added ActionRenderer and docs ([3d08d26](https://github.com/DevoInc/genesys-ui/commit/3d08d26f06aea6c4d77717617c948e85d9bed1f1))
* bulk actions example ([56890cc](https://github.com/DevoInc/genesys-ui/commit/56890cc425bde54acc4d2f05b74c1e1abdba4070))
* **Datetime:** QUV-1987 Added new DateTimePicker version (docked) ([65bacf3](https://github.com/DevoInc/genesys-ui/commit/65bacf34c26751010f1f950dc82576d8862bc234))
* **Datetime:** QUV-1987 Renamed DateTimePicker to DateTimeFloatingPicker ([acd0e79](https://github.com/DevoInc/genesys-ui/commit/acd0e79170b9e8fa24c30682246e8ef3db7ef2fd))
* **DateTimeRangePicker:** QUV-1220 Fixed styles for Presets block and other adjustments. ([aa254cf](https://github.com/DevoInc/genesys-ui/commit/aa254cf02160a5349bd4b5a830ce219df2d71550))
* **Dropdown:** New structure and internal components. Improvements for documentation. ([58ec889](https://github.com/DevoInc/genesys-ui/commit/58ec889b4b7b407824b362623df9868416162b70))
* new name for component from Dropdown to Popover. ([cabca30](https://github.com/DevoInc/genesys-ui/commit/cabca302d5ad6b559b37e928fbcfc652884e2c32))
* **Table:** QUV-1941 Fixed date cell editor behavior ([6a0b0ba](https://github.com/DevoInc/genesys-ui/commit/6a0b0ba1cf189bf3a5da85449f00cd7f86642d1b))
* **Table:** QUV-1990 Improved styles and structure of OrderIndicator table component. ([7a07fa2](https://github.com/DevoInc/genesys-ui/commit/7a07fa29d40a87c492ffc4e2fa2fd22172f30a58))


### Bug Fixes

* defined default prop value ([0a20200](https://github.com/DevoInc/genesys-ui/commit/0a2020099142f86958efd362216e46e331d74758))
* fixed StyledModal test ([380ba7d](https://github.com/DevoInc/genesys-ui/commit/380ba7d423fb093cd223a6631c1727a538f29473))
* Lint ([8da01aa](https://github.com/DevoInc/genesys-ui/commit/8da01aa86303ae9cf936952f411d313f0d38d2b6))
* modal styles and interface ([9a61b92](https://github.com/DevoInc/genesys-ui/commit/9a61b92f6315b15d27a69c718a5649341cf31930))
* **Modal:** fixed z-index for overlay and avoided blur effect due to css translate. ([0d59747](https://github.com/DevoInc/genesys-ui/commit/0d597478af5bfed9dd5c0208157184ad5650af0c))
* **StyledModal:** Test case ([30c379b](https://github.com/DevoInc/genesys-ui/commit/30c379b91cb3bb6229b8f6cc7fe51d9612573e3a))
* **Table:** Type errors ([12e6de8](https://github.com/DevoInc/genesys-ui/commit/12e6de802837e1275811cf92e27b481923d2713c))

## [2.4.0](https://github.com/DevoInc/genesys-ui/compare/v2.3.0...v2.4.0) (2024-01-03)


### Features

* QUV-1894 Popper not appended to body by default ([fc18858](https://github.com/DevoInc/genesys-ui/commit/fc188581d8ec50a71387a73058de2168f230c0e9))

## [2.3.0](https://github.com/DevoInc/genesys-ui/compare/v2.2.0...v2.3.0) (2024-01-03)


### Features

* **Menu:** added 'readOnly' new state for menu items to get them not interactive. ([1df52b9](https://github.com/DevoInc/genesys-ui/commit/1df52b9078dbebf8a8ea23afd9e3f2c9baff3071))
* **table:** added bulk renderers ([809d5b3](https://github.com/DevoInc/genesys-ui/commit/809d5b3709bc9677d1b2c63bcd901c89d8e07ac8))


### Bug Fixes

* IsMulti is not assignable to Select component ([d5f7098](https://github.com/DevoInc/genesys-ui/commit/d5f7098d6305fa982e8158f900521d85acb1300b))

## [2.2.0](https://github.com/DevoInc/genesys-ui/compare/v2.1.0...v2.2.0) (2024-01-03)


### Features

* **Panel:** 'ref' property not required in Panel.Container ([f59f1ae](https://github.com/DevoInc/genesys-ui/commit/f59f1ae3f730ef69310f17b0e54bf1050c403b8e))

## [2.1.0](https://github.com/DevoInc/genesys-ui/compare/v2.0.0...v2.1.0) (2024-01-03)


### Features

* **tokens:** updated to the last version of genesys-brand-devo to get the new size of checkboxes and radios. ([a3f9c12](https://github.com/DevoInc/genesys-ui/commit/a3f9c12b7f6d4e8882ad865a43954e61a178255b))

## [2.0.0](https://github.com/DevoInc/genesys-ui/compare/v1.8.0...v2.0.0) (2024-01-02)


### ⚠ BREAKING CHANGES

* removed DrowdownMenu in favor of Dropdown
* refactor filters, presets and declarations

### Features

* added new format for column filters ([d8a91d7](https://github.com/DevoInc/genesys-ui/commit/d8a91d7a65777849173f8cf4b580bc5c92f0515c))
* adjustments for cell editors and column highlighting. ([c06a6de](https://github.com/DevoInc/genesys-ui/commit/c06a6de6f2cc94a9157e1425d5bdc227a7d00765))
* **AppBar:** compact mode ([3fcadab](https://github.com/DevoInc/genesys-ui/commit/3fcadab292a6c56193dbcdac472c7dff03696e9d))
* **AppBar:** improved the contrast of the AppBar heading, changing its colorScheme. ([00a77f6](https://github.com/DevoInc/genesys-ui/commit/00a77f6e78b2ab67d2b15efd37814dd0d6690dd9))
* **AppBar:** improvements and added option to get a bottom border. ([b5ff13f](https://github.com/DevoInc/genesys-ui/commit/b5ff13f7943a73b67bfb2cebb83bf0bea6fadd0d))
* **Core:** new dropdown component ([b90eb46](https://github.com/DevoInc/genesys-ui/commit/b90eb46b5b6fd106e6d5aff5d617739ebc1c6fe9))
* **Dropdown:** component improvement ([9a4c212](https://github.com/DevoInc/genesys-ui/commit/9a4c2129cb55f30440d0a0260d4bb56290e53bb3))
* **FieldsCombiner:** added new option to combine two Button, IconButton or Popper components. ([8a37d08](https://github.com/DevoInc/genesys-ui/commit/8a37d080c2aa5ac6cdb74d317c3ef5337678fcbe))
* improvements for editors ([d0152b3](https://github.com/DevoInc/genesys-ui/commit/d0152b34b6955e0d1bb69bc1fb71a84bc3adf5d3))
* improvements for InlineMessage and Field ([598c764](https://github.com/DevoInc/genesys-ui/commit/598c7643dd8ff9ba52cff6ea38eded20532b6384))
* improvements for tags filter ([f41064d](https://github.com/DevoInc/genesys-ui/commit/f41064d606eee6653a72427c54cc035c9749dcbd))
* improvements in Wrap and BooleanRenderer ([5c50647](https://github.com/DevoInc/genesys-ui/commit/5c50647b4203640f3c53f10d778253aa8c97859d))
* **Menu:** added VFlex props because this type of component is already used as its base. ([3ef731f](https://github.com/DevoInc/genesys-ui/commit/3ef731f07dd76a58f4ef9e99c747357c62e0d398))
* **Popper:** added styles and subComponentStyles to Popper to add custom styles to the trigger and to the popper container. ([6678eb9](https://github.com/DevoInc/genesys-ui/commit/6678eb928e791a66d2a281b22f18edba91a76c6f))
* prototype for column filtering and improvements for form components. ([9d55df0](https://github.com/DevoInc/genesys-ui/commit/9d55df0b61e94422ea37fe0bebd312bc97fd19a8))
* QUV-758 Create column sorting and OrderIndicator ([c940c60](https://github.com/DevoInc/genesys-ui/commit/c940c60392e599be1163b6e8bcc6d065fee329f8))
* refactor filters, presets and declarations ([0cc50ad](https://github.com/DevoInc/genesys-ui/commit/0cc50adcac8ea1f63bdd65475b3ed57dafa52180))
* removed DrowdownMenu in favor of Dropdown ([343710e](https://github.com/DevoInc/genesys-ui/commit/343710ed49e82ad7707a063fcd89a7ea5f1dcbfe))
* rename ([4cacb62](https://github.com/DevoInc/genesys-ui/commit/4cacb6215e5e4a3b97ab7c7d62f546d1c6ee66b1))
* rename ([b7bd82f](https://github.com/DevoInc/genesys-ui/commit/b7bd82f1c9509c79e469813b4f1557f10089ac5e))
* styles for row states, column highlighting, new values for table context and new constants and functions. ([89892a7](https://github.com/DevoInc/genesys-ui/commit/89892a7782eae3cd62f3adf67f7fa89bdc859ef8))
* **Table:** Improved context communication and values update for table body ([5a2441a](https://github.com/DevoInc/genesys-ui/commit/5a2441a5ffee43c9f97604d04630589d8ad55e0d))
* **Table:** rename of the filters ([f8ab5c7](https://github.com/DevoInc/genesys-ui/commit/f8ab5c78447992926194be152217380958a3abfc))


### Bug Fixes

* add ref null in panel component ([8a93791](https://github.com/DevoInc/genesys-ui/commit/8a93791d9e0ad79514999cdefab92a9e5327ba40))
* **ButtonGroup:** fixed styles to avoid get them in every sibling FlexItem. ([c1b3dc9](https://github.com/DevoInc/genesys-ui/commit/c1b3dc99877d98f3c0fd43830530e53af5bd8914))
* lint ([148aeda](https://github.com/DevoInc/genesys-ui/commit/148aeda967d7b971e6e3cf7157d12edca30c24ac))
* lint ([66fc9af](https://github.com/DevoInc/genesys-ui/commit/66fc9af209a7cbea7e456aa8e402dae42daf1026))
* modified styles in Avatar and fixed manage of style props in Popper. ([e4381d2](https://github.com/DevoInc/genesys-ui/commit/e4381d2e60505ae3327b3104fcdd7fe261f80a7e))
* **SelectControl:** tokenize input value ([1fcdb1c](https://github.com/DevoInc/genesys-ui/commit/1fcdb1cb5b44dccbb9607b096dcda43be592fbed))
* **Table:** Columns default width calculation ([49abc61](https://github.com/DevoInc/genesys-ui/commit/49abc61201c78d49383cc3db93947e13a19b87ab))
* **table:** fix minWidth of the table ([8a45014](https://github.com/DevoInc/genesys-ui/commit/8a450146c7401a3a0b248b22c26129cd73f2a1d1))
* **Table:** Props and imports errors ([0ad0862](https://github.com/DevoInc/genesys-ui/commit/0ad086250363b5fef3a967c2b099e9401fbdefc9))
* **Table:** QUV-1922 Scroll styles behavior ([a93332d](https://github.com/DevoInc/genesys-ui/commit/a93332dc225fea8124186195dd5c98e50b827aba))
* **Table:** Recovered prop names ([08b6f35](https://github.com/DevoInc/genesys-ui/commit/08b6f35220a04a28a4067703be2a9cd64bf3b615))
* **Table:** Row height calculation for virtualization ([a8a5d47](https://github.com/DevoInc/genesys-ui/commit/a8a5d4780abc31b00785f5a759ddfe8a65a43403))
* **Table:** TS types ([21cacac](https://github.com/DevoInc/genesys-ui/commit/21cacac1319d9a6962cf98e23fef204786e77ddb))


### Vulnerabilities

* **deps-dev:** bump @adobe/css-tools from 4.3.1 to 4.3.2 ([2312396](https://github.com/DevoInc/genesys-ui/commit/23123964814706a73b736a62d8120e831d7f1ac2))
* **deps-dev:** bump vite from 4.5.0 to 4.5.1 ([2edc3d4](https://github.com/DevoInc/genesys-ui/commit/2edc3d42b9c35e18667357acab5ff046a65a53f2))

## [1.8.0](https://github.com/DevoInc/genesys-ui/compare/v1.7.0...v1.8.0) (2023-12-04)


### Features

* cell edit mode styles and HTML attributes ([86df153](https://github.com/DevoInc/genesys-ui/commit/86df1530db42eb8c7a2fd73253ddff4633b21d67))
* Row and editable cell interactions. ([5ff10e7](https://github.com/DevoInc/genesys-ui/commit/5ff10e7b2fce2cea3188faf309fa35da9ad50af1))


### Bug Fixes

* **Editor:** solve callbacks not updating ([b721d05](https://github.com/DevoInc/genesys-ui/commit/b721d0576c9f2ef5404d0bb6604ca020795cf54e))
* lint and use of correct provider. ([b87e5e8](https://github.com/DevoInc/genesys-ui/commit/b87e5e870345ea4298e15c05a3bd14b16f8f66fe))
* **Table:** Used correct width for calculations ([566dec6](https://github.com/DevoInc/genesys-ui/commit/566dec6dca2d40826d9a1e1de4c5e03d84939961))

## [1.7.0](https://github.com/DevoInc/genesys-ui/compare/v1.6.1...v1.7.0) (2023-11-30)


### Features

* added minWidth behavior and style adjustments ([69e3589](https://github.com/DevoInc/genesys-ui/commit/69e35891a8cbcc4b689a0f00ddc57011bcc39608))
* **Table:** Added algorithm for percentage column widths ([57c66c6](https://github.com/DevoInc/genesys-ui/commit/57c66c61ee4754541e124142fa5ab2324577706c))
* **Table:** Applied user onChange callback for edit cells ([0694d3d](https://github.com/DevoInc/genesys-ui/commit/0694d3d803816bb3f45697cfdd31246ffb951fbd))

## [1.6.1](https://github.com/DevoInc/genesys-ui/compare/v1.6.0...v1.6.1) (2023-11-30)


### Bug Fixes

* Update monaco editor on value change only if the ([28a8088](https://github.com/DevoInc/genesys-ui/commit/28a8088b9bce3f01f5fd2c54bcf16037aa3c61ba))

## [1.6.0](https://github.com/DevoInc/genesys-ui/compare/v1.5.1...v1.6.0) (2023-11-29)


### Features

* improvements for the Table and added context provider for Table configuration. ([6888fdf](https://github.com/DevoInc/genesys-ui/commit/6888fdf3e2f8425b40161c611fb9c7c8122c0951))
* Improvements for the virtualization and row look and feel. ([28cce03](https://github.com/DevoInc/genesys-ui/commit/28cce03a92363bcfd941addcc9d71a885e64754c))
* new naming for props and styles for rows. ([3665f49](https://github.com/DevoInc/genesys-ui/commit/3665f4925a149a3338a23600ef5483e98e5f0ce9))
* **Table:** Added horizontal virtualization ([8da3740](https://github.com/DevoInc/genesys-ui/commit/8da374071c8bd425d4eb9b71f9adf7b030047cb9))
* **Table:** Added user cell width in styled element ([6a484a2](https://github.com/DevoInc/genesys-ui/commit/6a484a2d788d587c64cf88606708de7f02e08dca))
* **Table:** Added user row height for virtualizer estimate size ([6b2ff04](https://github.com/DevoInc/genesys-ui/commit/6b2ff0427ffae45a82bdab12baa07e911ac94499))
* **Table:** Calculated scroll logic into React state for correct visualization ([e785f99](https://github.com/DevoInc/genesys-ui/commit/e785f99d4b1e61797911785feb6b7323abb080ac))
* **Table:** style and virtualization improvements ([9712225](https://github.com/DevoInc/genesys-ui/commit/97122257162cef8ac323d89a025a2b334853b135))


### Bug Fixes

* fixed lint problems. ([29b2ee6](https://github.com/DevoInc/genesys-ui/commit/29b2ee61f074ac114547dfb589d21f921f931e3e))
* **Table:** Adjusted scroll flag calculation ([951bf1a](https://github.com/DevoInc/genesys-ui/commit/951bf1a1eff36b02829a1fd13212c04e7b663d22))
* **Table:** Solved TS errors ([d7e12cd](https://github.com/DevoInc/genesys-ui/commit/d7e12cd16367b124a1aa8f191fa7890e44e4e18f))

## [1.5.1](https://github.com/DevoInc/genesys-ui/compare/v1.5.0...v1.5.1) (2023-11-17)


### Bug Fixes

* **MenuItem:** fixed condition to show automatically check icon when it's selected and now it's possible to force not to have extra left space only by the specific prop. ([f49c66f](https://github.com/DevoInc/genesys-ui/commit/f49c66faa84db77c2e039456b17a1087570ca120))

## [1.5.0](https://github.com/DevoInc/genesys-ui/compare/v1.4.0...v1.5.0) (2023-11-16)


### Features

* modified the margin prop of Divider component to have the same behavior of the rest of ones and added surface background color to the DropdownMenu. ([516110e](https://github.com/DevoInc/genesys-ui/commit/516110e32b3732f83a4b0e6997c7604cc7fe7150))


### Bug Fixes

* **Editor:** QUV-1868 - Minor Code styles have been improved ([#34](https://github.com/DevoInc/genesys-ui/issues/34)) ([e06c387](https://github.com/DevoInc/genesys-ui/commit/e06c387861a92832c12decf77006a8df577fd646))
* **tests:** fixed test for ToolbarSeparator. ([f906c65](https://github.com/DevoInc/genesys-ui/commit/f906c65b410be8db9c4ae740e99bcfcabb4fd2aa))

## [1.4.0](https://github.com/DevoInc/genesys-ui/compare/v1.3.0...v1.4.0) (2023-11-15)


### Features

* improvements for Icon, InputControl, MenuItem and PanelHeader components. ([2e2fa1d](https://github.com/DevoInc/genesys-ui/commit/2e2fa1df33906023c0aafc0a7111aef22827bfd9))


### Bug Fixes

* **icons:** fixed the font icon names according with the new naming way from genesys-icons project. ([d56d45b](https://github.com/DevoInc/genesys-ui/commit/d56d45bc0c4b9debcbb3acf29c16fc78c9c1f4d5))

## [1.3.0](https://github.com/DevoInc/genesys-ui/compare/v1.2.1...v1.3.0) (2023-11-15)


### Features

* adapted to the last version of genesys-icons and improvements for Icon component to admit IconBase components as children. ([39f3871](https://github.com/DevoInc/genesys-ui/commit/39f387129fc7012c6058e9c4dc027752c91c75f9))


### Bug Fixes

* **Table:** Improved virtualization scrolling ([d3d9bce](https://github.com/DevoInc/genesys-ui/commit/d3d9bce8cd78dbcb3ca3b59f8d1eb2c438f7aa26))
* **Table:** QUV-1836 Improved table virtualization and alignments ([969cb75](https://github.com/DevoInc/genesys-ui/commit/969cb753307601e23ee73ef28986d95df93a13b2))

## [1.2.1](https://github.com/DevoInc/genesys-ui/compare/v1.2.0...v1.2.1) (2023-11-10)


### Bug Fixes

* explicitly set @emotion/use-insertion-effect-with-fallbacks as external ([f4d326f](https://github.com/DevoInc/genesys-ui/commit/f4d326f698b6b3ce54213e71dcc63631139d8ef2))
* prevent @emotion/* from being bundled ([85a6cb7](https://github.com/DevoInc/genesys-ui/commit/85a6cb7e1233ca554b4c514d72341ec0260a216b))

## [1.2.0](https://github.com/DevoInc/genesys-ui/compare/v1.1.1...v1.2.0) (2023-11-08)


### Features

* add windowing ([7a023b6](https://github.com/DevoInc/genesys-ui/commit/7a023b650e34b1fc20675e2249917bad1ea69082))
* implement windowing horizontal by santiago.trigo ([6101940](https://github.com/DevoInc/genesys-ui/commit/6101940feaab3e60febaa7bb0abebd968b4272a8))
* **Table:** Fixed lint errors. Improved horizontal virtualization ([82c478b](https://github.com/DevoInc/genesys-ui/commit/82c478bb2e5eaaae69ea622e19e60b56c776b486))
* **Table:** QUV-1299 Added horizontal virtualization ([7ce1856](https://github.com/DevoInc/genesys-ui/commit/7ce1856479c30f298dbb77f5339eabae7825c92c))


### Bug Fixes

* **Box:** fixed condition in box css mixin to get the position correctly. ([4745385](https://github.com/DevoInc/genesys-ui/commit/47453859ad4019a1c52915a60b22231ceedae782))
* Lint ([0ea0f6c](https://github.com/DevoInc/genesys-ui/commit/0ea0f6c0a4e6d826bcbe799369dfa580f9eb18f8))
* rebuild package-lock and fix some icons ([1f188e1](https://github.com/DevoInc/genesys-ui/commit/1f188e1b7a0f73af18cd3fecd3237ff43d872a93))
* remove styled attr on Icon ([5f57415](https://github.com/DevoInc/genesys-ui/commit/5f57415168fbacc6ec6b8ff4ae62941fe698eaea))
* remove styled attr on Menu ([aed9515](https://github.com/DevoInc/genesys-ui/commit/aed95152269316aea90c81f5a8354bb6326e5bfa))
* remove styled attr on ProgressBar ([45cc19e](https://github.com/DevoInc/genesys-ui/commit/45cc19e14bec0a840e2acc42920d3df14e8a6b3d))
* remove styled attr on SelectControl ([e3baa29](https://github.com/DevoInc/genesys-ui/commit/e3baa2962c7c8282dcb2e2a9d92e4dec567b2025))
* revert the notation of the mixin on menu ([2b4d875](https://github.com/DevoInc/genesys-ui/commit/2b4d875d965dece1225c85f6c017e4756d45f65b))
* **Table:** Adapted stories to new props ([772b885](https://github.com/DevoInc/genesys-ui/commit/772b8855137d5b00ec5fa5fa3916c4acd46f9b60))
* **test:** fixed boxMixin test. ([db0bc8f](https://github.com/DevoInc/genesys-ui/commit/db0bc8f4f8f94a22f5a94231e7f73cb9707f5978))

## [1.1.1](https://github.com/DevoInc/genesys-ui/compare/v1.1.0...v1.1.1) (2023-11-03)


### Bug Fixes

* **DiffEditor:** improve diff styles ([7297d54](https://github.com/DevoInc/genesys-ui/commit/7297d54d066ab1ccc14405161c3a523c4a102317))
* **Jest:** Added polyfill for ResizeObserver in Jest tests ([d7baa52](https://github.com/DevoInc/genesys-ui/commit/d7baa528893f49cd91cf4ee4c0dfe34c4c61e26a))

## [1.1.0](https://github.com/DevoInc/genesys-ui/compare/v1.0.3...v1.1.0) (2023-10-31)


### Features

* **code:** added registerLanguage ([20ad079](https://github.com/DevoInc/genesys-ui/commit/20ad0793090e5af03a41a0899538a58c1c641330))
* **Code:** internalize theme provision ([21cc408](https://github.com/DevoInc/genesys-ui/commit/21cc408dce9bebf91bea2b974cf7c2c843383f34))


### Bug Fixes

* removed console.info ([977a17c](https://github.com/DevoInc/genesys-ui/commit/977a17c0dd51c83e949a7fa67d104919db8b92fb))

## [1.0.3](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.35...v1.0.3) (2023-10-27)

## [1.0.3-alpha.35](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.34...v1.0.3-alpha.35) (2023-10-26)


### Features

* **DiffEditor:** new component `DiffEditor` ([65f4835](https://github.com/DevoInc/genesys-ui/commit/65f4835a0041ee419b1afa32e0f0cc854f2df44a))

## [1.0.3-alpha.34](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.33...v1.0.3-alpha.34) (2023-10-23)


### ⚠ BREAKING CHANGES

* **Editor:** rename `SmartEditor` to `Editor`

### Features

* **Editor:** rename `SmartEditor` to `Editor` ([026fa85](https://github.com/DevoInc/genesys-ui/commit/026fa852ad4c8b54c90be43d136259b699b025e4))


### Bug Fixes

* **Editor:** fix styles in readonly mode ([53b90dd](https://github.com/DevoInc/genesys-ui/commit/53b90dd397da1db4c38b54ceec45295f7abb5dc2))

## [1.0.3-alpha.33](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.32...v1.0.3-alpha.33) (2023-10-20)


### ⚠ BREAKING CHANGES

* **SmartEditor:** Some `Editor` styles are being moved to the `Container`

### Features

* **SmartEditor:** Some `Editor` styles are being moved to the `Container` ([3c8c139](https://github.com/DevoInc/genesys-ui/commit/3c8c139a46653c49c78f1fefd8c7e851ef6e0804))
* **SmartEditor:** Tokenize base text ([5d1b368](https://github.com/DevoInc/genesys-ui/commit/5d1b368206e452d8daeff505023565550b0b52f8))
* **SmartEditor:** Tokenize overview ruler and minimap ([f30c490](https://github.com/DevoInc/genesys-ui/commit/f30c490a8194b5e55aa009f14370d34d44e7e646))


### Vulnerabilities

* **deps:** bump @babel/traverse from 7.23.0 to 7.23.2 ([418be96](https://github.com/DevoInc/genesys-ui/commit/418be968b9883708774c276554122a42455db86c))

## [1.0.3-alpha.32](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.31...v1.0.3-alpha.32) (2023-10-05)


### Features

* buttongroup supports array of children or just one element ([5409033](https://github.com/DevoInc/genesys-ui/commit/540903307ecfb02a55a76034ddfbf9f025469e03))

## [1.0.3-alpha.31](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.30...v1.0.3-alpha.31) (2023-10-04)


### Features

* add cell edit ([d309b32](https://github.com/DevoInc/genesys-ui/commit/d309b32141510ca2bab3f4f783e9f80656d34d86))
* add data renderer ([79efbc6](https://github.com/DevoInc/genesys-ui/commit/79efbc6d642481bd103ff1fba0334a31824ddcb6))
* **Cell:** Added cell edition behavior ([a019b6b](https://github.com/DevoInc/genesys-ui/commit/a019b6b3722aa6da9d2ec030f81310d1e636f194))
* **Cell:** Added custom case for edit cell ([d04ba09](https://github.com/DevoInc/genesys-ui/commit/d04ba09f49efc2dbe537b0a7cd5d873906b3946f))
* **Cell:** Added edit mode disabling on outside click ([f519dc9](https://github.com/DevoInc/genesys-ui/commit/f519dc998f9bfafa3666325d0b92967abab760ad))
* **Cell:** Added reset and initial value management ([35cd9f8](https://github.com/DevoInc/genesys-ui/commit/35cd9f84e75eb542fba8288c746949fa01d56b96))
* create table component ([16dd870](https://github.com/DevoInc/genesys-ui/commit/16dd87043cd1f091e4c76c395c7f797c6aef0811))
* new format stories ([9d4420d](https://github.com/DevoInc/genesys-ui/commit/9d4420d7a2137c93a340c8f3881f2395ab5d4632))
* new table component ([84dea76](https://github.com/DevoInc/genesys-ui/commit/84dea766976aa6b78a7139e9aab420e7432d9ab9))
* Opened edit cell on double click ([080bdc7](https://github.com/DevoInc/genesys-ui/commit/080bdc79a4aeb81672dbe885794cb9c65e151dc8))
* **Row:** QUV-764 Initial migration for table Row component ([b80b950](https://github.com/DevoInc/genesys-ui/commit/b80b950fb8309a098ddc589171b8e752a7797a7f))
* **Table:** QUV-770 First migration for HeaderCell ([fb6944d](https://github.com/DevoInc/genesys-ui/commit/fb6944dcd2d8b2ca7283f80d4bcee9aba8c8c9db))


### Bug Fixes

* Avoided edit mode disabling when double clicking already in edit mode ([6c07d5e](https://github.com/DevoInc/genesys-ui/commit/6c07d5ede6324cebf5da9a7866644b84f56bdbda))
* Brand type import ([be2be4c](https://github.com/DevoInc/genesys-ui/commit/be2be4c32802e24e13ecc40adc7f647cda2737da))
* Brand type import ([c0a20b0](https://github.com/DevoInc/genesys-ui/commit/c0a20b0771d187acf9d55f97b064ae2c4dd2dd8a))
* **Cell:** Recovered cell edition behavior ([1c06f59](https://github.com/DevoInc/genesys-ui/commit/1c06f592b9d4b234df182cdcd6c1254bb350fac0))
* Component export ([cfc873a](https://github.com/DevoInc/genesys-ui/commit/cfc873acbe8a7bc91becc52f1031e6ed338866c7))
* Focused on input when opening edition cell ([70a4977](https://github.com/DevoInc/genesys-ui/commit/70a4977f642faaa65282ebe7807f4b1022a8c614))
* Lint ([c78439a](https://github.com/DevoInc/genesys-ui/commit/c78439a57790739cf245a9fd96dc7b2d2b6654dd))
* Migrated component mismatch ([86c2bd9](https://github.com/DevoInc/genesys-ui/commit/86c2bd986fb848e824eaee4705038b43127da0d8))
* Minor type corrections ([7721729](https://github.com/DevoInc/genesys-ui/commit/772172976d3eb463b4e5a2cde34d80ddaf891114))
* rename folders components ([c1520a3](https://github.com/DevoInc/genesys-ui/commit/c1520a3518cf8517176d9bc02410955367791d22))
* Reverted prop type change ([fa56489](https://github.com/DevoInc/genesys-ui/commit/fa56489fcc98ca2c86e1f14429de2607d3e1f4db))
* styled row and cell ([ba0ca22](https://github.com/DevoInc/genesys-ui/commit/ba0ca22e40df42246748ca17a5aa9e89871394dc))
* Type error ([14b8846](https://github.com/DevoInc/genesys-ui/commit/14b8846df09b1f0031912c9e85c9ee97080752a9))
* Type mismatch ([6781bba](https://github.com/DevoInc/genesys-ui/commit/6781bba05da5abb43c080bf0e673f6d67122752d))

## [1.0.3-alpha.30](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.29...v1.0.3-alpha.30) (2023-10-04)


### Bug Fixes

* **SmartEditor:** solve issue with markers when multiple editors are active ([b8630b1](https://github.com/DevoInc/genesys-ui/commit/b8630b1597131cf11cc8a1e1316ba0fdc23b9815))

## [1.0.3-alpha.29](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.28...v1.0.3-alpha.29) (2023-10-04)


### Bug Fixes

* **SmartEditor:** downgrade version ([26ed10a](https://github.com/DevoInc/genesys-ui/commit/26ed10a6ac4b5a9c9e7338a875d35a1adea6d0f0))


### Vulnerabilities

* **deps-dev:** bump postcss from 8.4.30 to 8.4.31 ([#25](https://github.com/DevoInc/genesys-ui/issues/25)) ([627a954](https://github.com/DevoInc/genesys-ui/commit/627a954248087c9afa1d5b221724ae6e48b33d9c))

## [1.0.3-alpha.28](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.27...v1.0.3-alpha.28) (2023-09-29)


### Bug Fixes

* **SmartEditor:** update token in ActionsContainer ([5c21b2d](https://github.com/DevoInc/genesys-ui/commit/5c21b2ddd1a6882fb02256138b7c3db8f6faccbc))

## [1.0.3-alpha.27](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.26...v1.0.3-alpha.27) (2023-09-29)


### Bug Fixes

* **SmartEditor:** fix height in Container ([cf1ae8c](https://github.com/DevoInc/genesys-ui/commit/cf1ae8cd6da939211f32d658273f1ca9fe646bc0))

## [1.0.3-alpha.26](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.25...v1.0.3-alpha.26) (2023-09-29)


### Features

* new component `SmartEditor` ([95adfe2](https://github.com/DevoInc/genesys-ui/commit/95adfe2f444c9caa6053ff62cec35a9a3a91cd94))
* **SmartEditor:** Added dot notation ([a0c396d](https://github.com/DevoInc/genesys-ui/commit/a0c396d739b05530e08646ff7278c3e2d3aa9474))

## [1.0.3-alpha.25](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.24...v1.0.3-alpha.25) (2023-09-22)


### Features

* added props to AppLayout component ([0685b0c](https://github.com/DevoInc/genesys-ui/commit/0685b0cd6b98731c4a31536cd19983af96e632a2))
* added Resolve type function ([7b8a9d1](https://github.com/DevoInc/genesys-ui/commit/7b8a9d114ecfedae00b61252304f4177dad16bc4))

## [1.0.3-alpha.24](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.23...v1.0.3-alpha.24) (2023-09-21)


### Features

* **deps:** allow `react` 16.x ([60aab9e](https://github.com/DevoInc/genesys-ui/commit/60aab9e7e5385d3b2c20b8e9d557bee88c3135c1))

## [1.0.3-alpha.23](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.22...v1.0.3-alpha.23) (2023-09-21)


### Features

* added AppLayout component ([3e47a10](https://github.com/DevoInc/genesys-ui/commit/3e47a105600328370759bd25dd15fd2bda8fee38))
* AppLayout with no heading support ([ac3568f](https://github.com/DevoInc/genesys-ui/commit/ac3568f34bee4f99fb51c4126e180475770babc7))


### Bug Fixes

* removed Pagination from test story ([d9a7ae5](https://github.com/DevoInc/genesys-ui/commit/d9a7ae5c76718de5a91b5a5e716cb9544c30d181))

## [1.0.3-alpha.22](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.21...v1.0.3-alpha.22) (2023-09-11)


### Features

* renamed BoxMessage to Banner ([3d880a8](https://github.com/DevoInc/genesys-ui/commit/3d880a8ecf1d69763d0843104f6cd7d099109de9))


### Bug Fixes

* **Modal:** fix import ([64f41f9](https://github.com/DevoInc/genesys-ui/commit/64f41f92b3f87accfb4bec57ee6eb68d01801265))
* removed tooltip from index ([e8e4a34](https://github.com/DevoInc/genesys-ui/commit/e8e4a344424d526d1883a86bdcc4bf1d6ec083ec))

### [1.0.3-alpha.21](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.20...v1.0.3-alpha.21) (2023-08-24)


### Features

* **Brand:** Bump tokens version to `v6.0.0` ([c037b10](https://github.com/DevoInc/genesys-ui/commit/c037b10b7ee8239521e37728424c5abdd30ec058))
* QUV-1096 Elevated surfaces with border but the ground one ([f9974a7](https://github.com/DevoInc/genesys-ui/commit/f9974a7b7cb2a7e565c5eae30cdef48dc9c0401e))


### Bug Fixes

* fix error in tokens types import ([c23471c](https://github.com/DevoInc/genesys-ui/commit/c23471ce002d310f9273de4fc7c1baf3125ae25a))
* fixed lint ([fe4a68e](https://github.com/DevoInc/genesys-ui/commit/fe4a68e373b769bc1d4eb9131bc1d77882512893))
* **Popper:** QUV-1095 incorrect position on mount ([#23](https://github.com/DevoInc/genesys-ui/issues/23)) ([a41066e](https://github.com/DevoInc/genesys-ui/commit/a41066e8f40d897236d1d8ce764a2a3c3bb69fc4))

### [1.0.3-alpha.20](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.19...v1.0.3-alpha.20) (2023-07-27)


### Features

* added css overlapping to Modal ([e143aec](https://github.com/DevoInc/genesys-ui/commit/e143aec758f61d3cef47f1aba914f3d9588e0f85))
* css overlapping and refactor of several components ([349a3ae](https://github.com/DevoInc/genesys-ui/commit/349a3ae5555b4fdde3499bef359e84a9f29a2069))
* dot notation for Pagination and StatusMessage. Styles overlapping for several components. ([a500c64](https://github.com/DevoInc/genesys-ui/commit/a500c6445e64d60d1bd8c2223abc552ea329c150))
* **Helper:** QUV-1099 Avoided paragraph element in DOM when using a TSX message ([d4afa25](https://github.com/DevoInc/genesys-ui/commit/d4afa2575ef15981019c1b62858b27253ff60a60))
* Pagination to dot notation ([85d93ae](https://github.com/DevoInc/genesys-ui/commit/85d93ae524066c3bbe292b57c239176d7b1d9a9f))
* styles overlapping for ButtonGroup, Stepper and TagGroup ([7e809c3](https://github.com/DevoInc/genesys-ui/commit/7e809c368dfe2f5f7671db2b62d33a4cd2cb1dff))
* **Textarea:** QUV-1099 Added example for character counter ([1c8f078](https://github.com/DevoInc/genesys-ui/commit/1c8f0788b41b163f0ad5f9147c24354d4bb1c0ee))
* **Tooltip:** make offset properties optional ([c8b6166](https://github.com/DevoInc/genesys-ui/commit/c8b6166cd0ebd7fcafe1e5872e8975cb0c263593))
* **UsePagination:** enforce readonly fields ([6196d7b](https://github.com/DevoInc/genesys-ui/commit/6196d7b49f99c15e236aa3bee81f8bf5b4405cc5))


### Bug Fixes

* **BoxMessageActions:** make actions optional ([7203172](https://github.com/DevoInc/genesys-ui/commit/72031727a11a8126edbd1900a6b78fae9e3d9a0f))
* fix type imports ([f697240](https://github.com/DevoInc/genesys-ui/commit/f6972404ba5dff83b4515f375542ce89f81c4750))
* fixed interface ([dd736d9](https://github.com/DevoInc/genesys-ui/commit/dd736d9e82e5ab7cf2d77e725b51f42c483ed8f5))
* fixed lint ([c068643](https://github.com/DevoInc/genesys-ui/commit/c06864357f985af08ab9a71a6fa068eded34e53c))
* Linter ([a3eea7f](https://github.com/DevoInc/genesys-ui/commit/a3eea7f3003f0b8b3a25e00f67a4fe3dbb179ea4))
* **Textarea:** Used Flex.Item instead of FlexItem ([791d19d](https://github.com/DevoInc/genesys-ui/commit/791d19d219be1031e46dcbfdebb6401165d3d46a))

### [1.0.3-alpha.19](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.18...v1.0.3-alpha.19) (2023-07-21)


### Bug Fixes

* **build:** recover sourcemaps for bundles ([9b9cade](https://github.com/DevoInc/genesys-ui/commit/9b9cade98633a1ba091f83782ef0c2f20997345b))


### Vulnerabilities

* **deps-dev:** bump word-wrap from 1.2.3 to 1.2.4 ([#20](https://github.com/DevoInc/genesys-ui/issues/20)) ([d2e4ab8](https://github.com/DevoInc/genesys-ui/commit/d2e4ab82a38e1ca45f3d07da3d3144fe410ddd68))

### [1.0.3-alpha.18](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.17...v1.0.3-alpha.18) (2023-07-17)


### Features

* **AppBar:** added subcomponentStyles to the component to apply custom styles to each subcomponent in complex components ([35c9614](https://github.com/DevoInc/genesys-ui/commit/35c9614aad036ad0466e21b01b27c1e4a951a5a0))
* **BoxMessage:** converted to dot notation ([0662a7a](https://github.com/DevoInc/genesys-ui/commit/0662a7a48bafc37277b638e7dd521c997a23c4ff))
* **Chip:** dot notation for Chip and small adjujstments ([6f32e1c](https://github.com/DevoInc/genesys-ui/commit/6f32e1cd7b5fd7cb58dfc1c372183602830e855a))
* **Collapse:** dot notation ([607e456](https://github.com/DevoInc/genesys-ui/commit/607e4568aee36bb14bda498cc39c81563b8f2756))
* css overlapping for AppBar and Avatar components ([3d98097](https://github.com/DevoInc/genesys-ui/commit/3d9809784937f127bafc29cf91f7590b317d7060))
* css overlapping for Button and ButtonGroup components ([c0549a5](https://github.com/DevoInc/genesys-ui/commit/c0549a5b30f4082f92e7f90c6801f77dab94d58d))
* css overlapping for CheckboxControl, Chip, ChipGroup, Collapse, DecoratorBar, DevoLogoLoader and FormGroup ([eb2c545](https://github.com/DevoInc/genesys-ui/commit/eb2c545fadba3b512e2c0f9aa7fc03df2f040a15))
* css overlapping for datetime package components ([f986506](https://github.com/DevoInc/genesys-ui/commit/f986506f82a1ebbdc64b497ecf4dbcefd1f9f6e2))
* css overlapping for form package components ([bb90400](https://github.com/DevoInc/genesys-ui/commit/bb90400e44b627218570feac5a512e9e7f3e1d04))
* css overlapping for Grid, Helper, InlineMessage, InputControl, Loader, Menu, Modal, Pagination, Partitions, ProgressBar, RadioControl, Splitter, StatusMessage, Switch, Tag, TextareaControl, Thumbnail, Toolbar and Typography components ([372a706](https://github.com/DevoInc/genesys-ui/commit/372a7064e55befa6e372a08111b4f0737e2fa8b8))
* styled-components are not exported anymore ([e3cfcc9](https://github.com/DevoInc/genesys-ui/commit/e3cfcc9ca6c6b1c352b86fc39f4733652367f06c))
* **styles:** Initial use of styles configuration ([9c936a1](https://github.com/DevoInc/genesys-ui/commit/9c936a18d14f7080b68c732e02803ef29c8d9ff7))
* **tokens:** updated to the last version of genesys-brand-devo to get the new tokens for BoxMessage component and its elements ([db64ce4](https://github.com/DevoInc/genesys-ui/commit/db64ce43529653df8d3c780957c6a55654e74f42))


### Bug Fixes

* **BoxMessage:** comment crashing code ([ed94682](https://github.com/DevoInc/genesys-ui/commit/ed9468230436a0e3c4775946b8bbc8ac82af70b0))
* fixed character in prop name ([cbc1f2c](https://github.com/DevoInc/genesys-ui/commit/cbc1f2cbb29e7e314a281dd03481a3f6932916cd))
* **stories:** Moved component pages to their correct group in storybook navigation tree ([86d8f53](https://github.com/DevoInc/genesys-ui/commit/86d8f53faf3a35e3e3540ff3b716f0ca1f2fd804))
* uncommented code because now there are available the component tokens ([ddaa712](https://github.com/DevoInc/genesys-ui/commit/ddaa712d4c2164e9cb242b744fa12a1d37b4a8bb))


### Vulnerabilities

* **deps:** bump tough-cookie from 4.1.2 to 4.1.3 ([#18](https://github.com/DevoInc/genesys-ui/issues/18)) ([64589e6](https://github.com/DevoInc/genesys-ui/commit/64589e6752354e0dcaa991d0c0591f46a77e7c81))

### [1.0.3-alpha.17](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.16...v1.0.3-alpha.17) (2023-06-08)


### Features

* **Panel:** use of Box props instead of complex objects as widthScheme and heightScheme ([2c7d2f3](https://github.com/DevoInc/genesys-ui/commit/2c7d2f37ecdc846e3bb05d36627066927215fdf7))


### Bug Fixes

* **Panel:** adapted usage of removed props widthScheme and heightScheme in components based in Panel one ([a26c0fe](https://github.com/DevoInc/genesys-ui/commit/a26c0feb0ac46a46429db026de4380c1768f2074))

### [1.0.3-alpha.16](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.15...v1.0.3-alpha.16) (2023-06-08)


### Bug Fixes

* **MenuItem:** QUV-1108 Avoid adding extra space to the left, based in a new state 'active' and in presence of selectionScheme prop ([82d1b99](https://github.com/DevoInc/genesys-ui/commit/82d1b99b7f699135b38883c2ce209b76ee9faaa5))
* **PanelContainer:** passed Box props to the Box internal component to get the styles ([4457ae2](https://github.com/DevoInc/genesys-ui/commit/4457ae211cef415b5965e15b72adfa299414909f))
* **PanelSection:** avoid rendering Header or Footer of the Panel when there are not defined content props ([de2830f](https://github.com/DevoInc/genesys-ui/commit/de2830f2226d61d740dda0b5439ffa73b2edc929))

### [1.0.3-alpha.15](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.14...v1.0.3-alpha.15) (2023-06-08)


### Bug Fixes

* **AppBar:** QUV-1107 Fixed alignment of the AppBar actions to the right ([13a74d8](https://github.com/DevoInc/genesys-ui/commit/13a74d8b4dad84eda0f34bdcd8121afb8a95010c))
* **IconButtonCollapse:** QUV-1104 Avoid extra space for the icon ([d15c974](https://github.com/DevoInc/genesys-ui/commit/d15c97436d265bd9a3184f51003ab8b9cf896361))
* **Layout items:** QUV-1105 Fixed layout items passing style props as attrs to the HTML and not applying styles ([d45bd09](https://github.com/DevoInc/genesys-ui/commit/d45bd090e77d8fa5703011dd2fbc2f86587f5ff8))

### [1.0.3-alpha.14](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.13...v1.0.3-alpha.14) (2023-06-06)


### Features

* added styled-components css overload ([4981975](https://github.com/DevoInc/genesys-ui/commit/49819753739b794acc7f5814dc7bfab08463705e))
* **AppBar:** AppBar with dot notation ([234e484](https://github.com/DevoInc/genesys-ui/commit/234e4841bf7ebc79b94cc3722cf682a0db4e3bb6))
* **AppBar:** QUV-344 Review spacing ([e90c576](https://github.com/DevoInc/genesys-ui/commit/e90c576734485ca454d19ffcf8067b284c9c4c95))
* **ButtonGroup:** allow to children to pass custom size ([4d9e5a2](https://github.com/DevoInc/genesys-ui/commit/4d9e5a24ab21a55bd0482b5064804e43568d2fbc))
* **ContentSwitcher:** make `ContentSwitcherItem` available ([0f53556](https://github.com/DevoInc/genesys-ui/commit/0f535565aa57f619c1d16b8627ab5ccf49d6cd4d))
* **ContentSwitcher:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([32facf3](https://github.com/DevoInc/genesys-ui/commit/32facf39a4b7c870ca071d3bbcfeb346482a4ec2))
* **core/Modal:** make Modal composable ([ef20159](https://github.com/DevoInc/genesys-ui/commit/ef201598b241a25ebc2c9376c10d1c1fe5965cc8))
* **core:** added value to TextareaControl ([b0bbf49](https://github.com/DevoInc/genesys-ui/commit/b0bbf4957f990c037ba6bb87bd548ade66a55e8d))
* **DateRange:** QUV-575 adapted to the design system look & feel and AA accessibility ([#13](https://github.com/DevoInc/genesys-ui/issues/13)) ([28affde](https://github.com/DevoInc/genesys-ui/commit/28affdea8f9a789c0fc10b7655178e48095df86e))
* **doc:** QUV-1015 Create storybook pages for some IconButton cases ([1d6afd6](https://github.com/DevoInc/genesys-ui/commit/1d6afd6abd8d49b646a6b12999c9b61c8651ba31))
* **docs:** QUV-1014 Create in Storybook the examples for Heading and Paragraph editable ([e6fc010](https://github.com/DevoInc/genesys-ui/commit/e6fc010a06ffdf3dcdd5b338dabdc6f0d30bc31b))
* **docs:** QUV-1018 Create in Storybook the case for TagGroup as legend ([8d328f6](https://github.com/DevoInc/genesys-ui/commit/8d328f6dcbb1ff5e97d98e328d5e8804309bc621))
* **DropdownMenu:** QUV-538 Use Menu in DropdownA11yMenu component and rename ([e3df1cd](https://github.com/DevoInc/genesys-ui/commit/e3df1cd3ec0e25a5939ca197596028a2cddd673a))
* **EditableContent:** QUV-1014 Create new EditableContent component and examples for Heading and Paragraph editable ([73287c5](https://github.com/DevoInc/genesys-ui/commit/73287c5b519b5d04f7fd6d2383cb6047a625048a))
* **FieldsCombiner and SelectControl:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([233aebd](https://github.com/DevoInc/genesys-ui/commit/233aebd8ee47b35263196e719be335885329e997))
* **FieldsCombiner and TagGroup:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([c67f62e](https://github.com/DevoInc/genesys-ui/commit/c67f62ea5a069998eb5fc785e3060cfa16619a81))
* **FieldsCombiner:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([d801f48](https://github.com/DevoInc/genesys-ui/commit/d801f482cef207db77fbf8e2c7000830cede3427))
* **Flex:** Flex component as dot notation ([19577a8](https://github.com/DevoInc/genesys-ui/commit/19577a8a5a4ac92ab7a1ae74ad5f2f89aa096a37))
* **Fluid components:** QUV-1008 Use of styles prop and original components instead of extending styled components or use 'as' prop ([72dbe71](https://github.com/DevoInc/genesys-ui/commit/72dbe71ced55940872cb7ebe295695ed53752c47))
* **IconButton:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([51d7c85](https://github.com/DevoInc/genesys-ui/commit/51d7c85cc76ba68e6157e0538ca3f75937f1fe50))
* **Icon:** QUV-973 Added 'colorScheme' prop to Icon component ([76e890a](https://github.com/DevoInc/genesys-ui/commit/76e890aff1008d1785a0b483159a4a71a2bb2f13))
* **icons:** QUV-712 Updated to the last version of genesys-icons to avoid problems with JS variables naming starting with numbers ([757ad1b](https://github.com/DevoInc/genesys-ui/commit/757ad1b8076374226fab8566e53fb4e8a662e0bb))
* **icons:** QUV-712 Updated to the last version of genesys-icons to avoid problems with naming based only in numbers ([16dee6e](https://github.com/DevoInc/genesys-ui/commit/16dee6e2d6f1e75db00761a1b8f974afe289d068))
* **icons:** QUV-727 remove 'gi-' autocompletion in components using Icons ([d9fc92b](https://github.com/DevoInc/genesys-ui/commit/d9fc92bacd1ce4fca9cc3af84f14229a7ff58a3f))
* **InputControl:** QUV-709 Same look & feel for type password inputs ([6b38645](https://github.com/DevoInc/genesys-ui/commit/6b38645b874fd1d998e21ac226d325c366d83085))
* **InputControl:** QUV-904 input control refactor with new pattern and dot notation ([#12](https://github.com/DevoInc/genesys-ui/issues/12)) ([28d15d2](https://github.com/DevoInc/genesys-ui/commit/28d15d2f3fc3e9679a0ff3d371a2ce5964dd9284))
* **Layout:** QUV-867 Styled Components which extend from Box lose styles if they use 'as' prop ([7dd14e4](https://github.com/DevoInc/genesys-ui/commit/7dd14e4d0f06fc7c17949ba2dc6a89495c6be22c))
* List with dot notation ([41a38ed](https://github.com/DevoInc/genesys-ui/commit/41a38ed7a6d47541b24c5810e177316f2919b3b8))
* Loader with dot notation ([a6dccaf](https://github.com/DevoInc/genesys-ui/commit/a6dccafe0e88318f6be53256f6ba1247fd5a438f))
* **MenuItem:** QUV-889 Add bottomContent to the MenuItem ([aee71fe](https://github.com/DevoInc/genesys-ui/commit/aee71fe588731caf701f4261aba6152aefbc3df6))
* **Modal:** QUV-544 Change Modal header proptypes from string to node ([cee97cb](https://github.com/DevoInc/genesys-ui/commit/cee97cb91fc490726dc33166b4ac3c7f18dcf78e))
* **Modal:** QUV-694 Add title attribute to Modal header title block ([267a9b8](https://github.com/DevoInc/genesys-ui/commit/267a9b844257bef6b9a27ef1f0726006d3631fb1))
* **Overlay:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([65809b7](https://github.com/DevoInc/genesys-ui/commit/65809b7f49897053a61da183def1fba249ad57f0))
* Panel with dot notation ([3b38856](https://github.com/DevoInc/genesys-ui/commit/3b38856f1f2285f638881824349b7f32ba0ec165))
* **Panel:** Panel with dot notation ([7bc775e](https://github.com/DevoInc/genesys-ui/commit/7bc775eff538eb5eaccc469ce88def4609bb3531))
* **Panel:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([fdf9763](https://github.com/DevoInc/genesys-ui/commit/fdf97633f3011c2b5e221840d851ba5e8021b568))
* **Panel:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([f0e605b](https://github.com/DevoInc/genesys-ui/commit/f0e605bb4526b515cfb8688ad1aa88062fd54b32))
* **ProgressBar, Button, Partitions, Modal:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([332d790](https://github.com/DevoInc/genesys-ui/commit/332d790abdde7214a0095e70f0435b1c4ae7c676))
* **ProgressBar:** visual improvements, added helper and floating helper and new stories ([092d91a](https://github.com/DevoInc/genesys-ui/commit/092d91a5bf893a34fa3ed0a614ff1bd7cd75cbbb))
* **props:** QUV-942 Change the name of the prop title to tooltip in all the components ([b6c87fd](https://github.com/DevoInc/genesys-ui/commit/b6c87fdc093e950b95636f612a19fbfb136e8e97))
* **props:** QUV-942 Fixed build problems ([29ea2f1](https://github.com/DevoInc/genesys-ui/commit/29ea2f1d4997e400a7c92999ca082d0dad5599a2))
* **props:** QUV-942 Fixed lint problems ([d66b6a5](https://github.com/DevoInc/genesys-ui/commit/d66b6a50042e9edf196444617375ce75468d56d6))
* QUV-385 Remove dom elements for serversiderendering ([f7dedcd](https://github.com/DevoInc/genesys-ui/commit/f7dedcde9e9401c46e27de96aecb71f893d92410))
* **SelectControl:** export `SelectOption` type ([ee44060](https://github.com/DevoInc/genesys-ui/commit/ee440608f9e27bee982f1c005fb1d8b56b6ee758))
* **Stepper:** minor changes ([4e94007](https://github.com/DevoInc/genesys-ui/commit/4e94007c4f3a165f4c2c8b7085c8f1e41cb55e57))
* **Stepper:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([d7b1418](https://github.com/DevoInc/genesys-ui/commit/d7b141861f919395465d6dbb42fc539da9497e9f))
* **Stepper:** QUV-308 Use the right tokens and added test ([e8046ea](https://github.com/DevoInc/genesys-ui/commit/e8046ea62edf8365454ed92450506809c76bc002))
* **stories:** improvements for Panel stories ([499b8bf](https://github.com/DevoInc/genesys-ui/commit/499b8bfe6506e9ae50ef5e4a0b2e21aa8211097e))
* **styles:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([6f03a76](https://github.com/DevoInc/genesys-ui/commit/6f03a76d3b86fee81ae3847028932e0327cd472d))
* **SwitchControl:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([5aae9c1](https://github.com/DevoInc/genesys-ui/commit/5aae9c1e94d95d3dbd8dbe6bdebccb575987f3f8))
* **Tabs:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([cc3f33f](https://github.com/DevoInc/genesys-ui/commit/cc3f33f6f46fb6d0f376c303b08afb66072c4ecb))
* **Tag and Badge:** QUV-1008 Avoid using styled() and use of dot notation for internal components ([30883de](https://github.com/DevoInc/genesys-ui/commit/30883de5d3f70401fa817a8c15f19c3bccdaf7a1))
* **Tag:** QUV-940 tooltip prop in Tag ([60ba85b](https://github.com/DevoInc/genesys-ui/commit/60ba85bea08173745744c5f417960bdf5f599e81))
* **Toast:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([ed20904](https://github.com/DevoInc/genesys-ui/commit/ed20904e40d4bc67d0585d78c8c4320525187d48))
* **Toast:** QUV-1008 Use of styles prop, subcomponents and dot notation instead of extending styled components or use 'as' prop ([7c8a48f](https://github.com/DevoInc/genesys-ui/commit/7c8a48fd47ca0abc3ceb8bc649ba898a2bc9d228))
* **Toast:** QUV-543 Add styles from react-toastify ([aa75cae](https://github.com/DevoInc/genesys-ui/commit/aa75cae2c1d100cf6688e638db97e80c7c31e9b9))
* **tokenization:** QUV-520 Adjustments for Loaders and Overlays and adapted UploadFiles to dark theme ([247ca0b](https://github.com/DevoInc/genesys-ui/commit/247ca0bba91f07ff52363be53eae062e17b67bba))
* **tokenization:** QUV-520 Adjustments mainly for dark scheme in BoxMessage and Toast components ([c8523c6](https://github.com/DevoInc/genesys-ui/commit/c8523c66b92e19cabff5564c6ddd25cf0ec8a48f))
* **tokenization:** QUV-520 Avatar and Collapse adjustments ([1d4ee01](https://github.com/DevoInc/genesys-ui/commit/1d4ee0191e5089fa291836f9f47a111cd666af40))
* **Typography:** QUV-730 Change the list style of unordered Typography.List component to disc ([e27769d](https://github.com/DevoInc/genesys-ui/commit/e27769ded2c881489834363c07efa6498a52ee62))


### Bug Fixes

* adapted components to Panel props ([febbe9f](https://github.com/DevoInc/genesys-ui/commit/febbe9f694b5a84227bfad21aada97a704732fde))
* **AppBar:** exporting subcomponents props ([89cc888](https://github.com/DevoInc/genesys-ui/commit/89cc888cba3a42e5f26f90e7851a243f792f3ac5))
* **Datetime:** solves QUV-888 ([984f4cb](https://github.com/DevoInc/genesys-ui/commit/984f4cb8fce6733b9ef02b2bcdfe4182c9081de2))
* eslint typos ([31744fc](https://github.com/DevoInc/genesys-ui/commit/31744fc761cbea82bb72000789b4fecf28c968d9))
* fixed lint ([b04c972](https://github.com/DevoInc/genesys-ui/commit/b04c97248360d795127bc4201f4f9c52cabe53b5))
* Fixed lint ([d2addeb](https://github.com/DevoInc/genesys-ui/commit/d2addeba035d7e68c5f9e32df94d9f2623dea486))
* **FormGroup:** QUV-840 FormGroup incorrect display using fieldset ([474d9a1](https://github.com/DevoInc/genesys-ui/commit/474d9a1c3464d8b4fc633eef219cb6624ffbde09))
* **Icon:** removed unnecessary types and fixed import paths ([ea1b87a](https://github.com/DevoInc/genesys-ui/commit/ea1b87aed4521a9d0347678c2db97ecabb0b493a))
* **InputControl:** QUV-974 Fixed background image for type search Input cancel button ([d75a63d](https://github.com/DevoInc/genesys-ui/commit/d75a63d01cd1036a12b2c9436a2a62de5fe3441c))
* **Input:** QUV-723 Input text with icon has a wrong style and adjustment for Input type password ([c62b3fb](https://github.com/DevoInc/genesys-ui/commit/c62b3fbad764d8050d68c2d8f89b6ca4984b7346))
* **Input:** QUV-911 Fixed styles to avoid conflicts with third part plugins ([0ca6856](https://github.com/DevoInc/genesys-ui/commit/0ca68561f38c2956a51678951b3e2625def71e78))
* **lint:** empty interface and not used import ([b752f7f](https://github.com/DevoInc/genesys-ui/commit/b752f7f16d86d07c7f6aa8d6e9f2509be32112cc))
* **Loader and ProgressBar:** fixed props ([f9221f7](https://github.com/DevoInc/genesys-ui/commit/f9221f7594111690ee4c5b4c9dc305d9a41e3fc8))
* **Menu:** wrong exporting Menu components ([5ddfce3](https://github.com/DevoInc/genesys-ui/commit/5ddfce31301ad78a16f6e84bb21d61d63f244067))
* **modal:** click inside modal close the modal ([36aca42](https://github.com/DevoInc/genesys-ui/commit/36aca42036c10d8b4b7761069f3bdeee498d8a7b))
* **modal:** zIndex on modal ([375901c](https://github.com/DevoInc/genesys-ui/commit/375901cc03c0c3cdacf6e897b0a1a281eb1fd5e0))
* **Panel:**  wron render header and footer content ([4e6f490](https://github.com/DevoInc/genesys-ui/commit/4e6f490ec7e547d5bc058d226a0277324f408e45))
* **Popper:** solve error in initial positioning ([95b2aac](https://github.com/DevoInc/genesys-ui/commit/95b2aacf6b3e4f13ef1fb17ca032f5b2f68b24fc))
* **Popper:** solve error in positioning ([0834b3f](https://github.com/DevoInc/genesys-ui/commit/0834b3f58808a39ae20fa58cd7f94ba08be86aa6))
* **Select:** add missing key to opts interface ([b183b65](https://github.com/DevoInc/genesys-ui/commit/b183b65e82f7d442cd543963aee5f8b470063b57))
* **Select:** QUV-837 Input with select with long text overlaps expands icon ([7b5e716](https://github.com/DevoInc/genesys-ui/commit/7b5e716738e34c8d757be6ac74084b642a74892d))
* **TagGroup:** interface ([e86e36c](https://github.com/DevoInc/genesys-ui/commit/e86e36c68e2381dc6fbd9a8b019deb498c9f04f7))
* **TextareControl:** fixed not necessary css ([8e19283](https://github.com/DevoInc/genesys-ui/commit/8e19283f1ec7b15e9ec3c0b3c95bb399a773d139))
* types errors detected on pipeline ([98dfd3e](https://github.com/DevoInc/genesys-ui/commit/98dfd3ee076ea6354a4afa31be468e4fda292459))
* wrong exporting ([46cc246](https://github.com/DevoInc/genesys-ui/commit/46cc246cfe1dcb4bf0ef5ba8d71106f8aebfbf67))


### Vulnerabilities

* **deps-dev:** bump vite from 4.3.8 to 4.3.9 ([#16](https://github.com/DevoInc/genesys-ui/issues/16)) ([410c724](https://github.com/DevoInc/genesys-ui/commit/410c724dc32df846f304ebe066e963178509beb8))
* **deps:** bump vm2 from 3.9.15 to 3.9.16 ([3daf530](https://github.com/DevoInc/genesys-ui/commit/3daf530c360f2a1a449e57b434522600d1409400))
* **deps:** bump vm2 from 3.9.16 to 3.9.17 ([#11](https://github.com/DevoInc/genesys-ui/issues/11)) ([1aac371](https://github.com/DevoInc/genesys-ui/commit/1aac371e0cf71550864d63817d89ff9d910cd311))
* **deps:** bump vm2 from 3.9.17 to 3.9.18 ([a116671](https://github.com/DevoInc/genesys-ui/commit/a11667176cc82d527cf52e66f4f62f82a151317c))

### [1.0.3-alpha.13](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.12...v1.0.3-alpha.13) (2023-03-28)


### Features

* **core/SelectControl:** allow options virtualization ([56c2d24](https://github.com/DevoInc/genesys-ui/commit/56c2d24a7c135b27c5abb854033ac136661b68c8))
* **datetime:** added aacesibility props ([e7e232f](https://github.com/DevoInc/genesys-ui/commit/e7e232f63a2a23f7800dff626b5e9407e9c3369d))


### Bug Fixes

* **form/Select:** solve ts errors using new control ([25f55da](https://github.com/DevoInc/genesys-ui/commit/25f55daae35c7c9e0b8ab028e2db01304b7f96b1))
* removed token level ([e96943a](https://github.com/DevoInc/genesys-ui/commit/e96943abbe1c01ad9a0885e970c1215361ff1521))

### [1.0.3-alpha.12](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.11...v1.0.3-alpha.12) (2023-03-15)

### [1.0.3-alpha.11](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.10...v1.0.3-alpha.11) (2023-03-15)

### [1.0.3-alpha.10](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.9...v1.0.3-alpha.10) (2023-03-14)


### Bug Fixes

* fix type declaration for dot notation cmps ([14ec61e](https://github.com/DevoInc/genesys-ui/commit/14ec61e379e9b7015946a76efcafc6457385d130))

### [1.0.3-alpha.9](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.8...v1.0.3-alpha.9) (2023-03-14)

### [1.0.3-alpha.8](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.7...v1.0.3-alpha.8) (2023-03-13)

### [1.0.3-alpha.7](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.6...v1.0.3-alpha.7) (2023-03-13)

### [1.0.3-alpha.6](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.5...v1.0.3-alpha.6) (2023-03-13)

### [1.0.3-alpha.5](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.4...v1.0.3-alpha.5) (2023-03-13)

### [1.0.3-alpha.4](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.3...v1.0.3-alpha.4) (2023-03-13)

### [1.0.3-alpha.3](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.2...v1.0.3-alpha.3) (2023-03-13)

### [1.0.3-alpha.2](https://github.com/DevoInc/genesys-ui/compare/v1.0.3-alpha.1...v1.0.3-alpha.2) (2023-03-13)

### 1.0.3-alpha.1 (2023-03-13)

### [1.0.2](https://github.com/DevoInc/genesys-ui/compare/v1.0.2-0...v1.0.2) (2023-03-10)

### [1.0.2-0](https://github.com/DevoInc/genesys-ui/compare/v1.0.1...v1.0.2-0) (2023-03-10)

### 1.0.1 (2023-03-10)