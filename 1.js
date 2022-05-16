<SelectDropdown
                    buttonTextStyle={{
                      color: style.textColor,
                      backgroundColor: '#EAF2FB',
                    }}
                    rowStyle={{backgroundColor: '#EAF2FB'}}
                    dropdownIconPosition="right"
                    rowTextStyle={{
                      fontSize: style.fontSize.xx,
                      fontFamily: style.fontFamilyMedium,
                      color: style.textColor,
                    }}
                    renderCustomizedRowChild={(item, index) => {
                      return (
                        <Text
                          style={{
                            fontFamily: style.fontFamilyMedium,
                            color: style.textColor,
                            fontSize: style.fontSize.xx,
                            marginLeft: 10,
                          }}>
                          {item}
                        </Text>
                      );
                    }}
                    dropdownStyle={{borderRadius: 8}}
                    renderDropdownIcon={() => {
                      return (
                        <Icon name="chevron-down" size={18} color="#000" />
                      );
                    }}
                    renderCustomizedButtonChild={(item, index) => {
                      return (
                        <View
                          style={{
                            flexDirection: 'row',
                            backgroundColor: '#EAF2FB',
                            flex: 1,
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontFamily: style.fontFamilyMedium,
                              fontSize: style.fontSize.xx,
                              color: style.textColor,
                            }}>
                            {item}
                          </Text>
                        </View>
                      );
                    }}
                    buttonStyle={{
                      width: '100%',
                      borderRadius: 8,
                      backgroundColor: '#EAF2FB',
                    }}
                    data={['Dollar', "So'm"]}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                  />