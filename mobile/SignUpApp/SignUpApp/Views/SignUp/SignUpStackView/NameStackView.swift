//
//  NameStackView.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/25.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class NameStackView: SignUpStackView {
    
    private let nameAlertlabel = SignUpAlertLabel(wrongMessage: "이름은 필수 입력 항목입니다.", correctMessage: "사용가능한 이름입니다.")
    
    override func configure() {
        self.alertLabel = nameAlertlabel
        guard let alertLabel = alertLabel else { return }
        addArrangedSubview(alertLabel)
    }
}
