module.exports = {
  name: 'cars',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cars',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
